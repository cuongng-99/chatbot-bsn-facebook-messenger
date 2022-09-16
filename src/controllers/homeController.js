require('dotenv').config();
import request from "request";
import chatbotService from "../services/chatbotService"

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN

let getHomepage = (req, res) => {
   return res.render("homePage.ejs", {
      facebookAppId: process.env.FACEBOOK_APP_ID
   })
};

let postWebhook = (req, res) => {
   // Parse the request body from the POST
   let body = req.body;

   // Check the webhook event is from a Page subscription
   if (body.object === 'page') {

      // Iterate over each entry - there may be multiple if batched
      body.entry.forEach(function (entry) {

         // Gets the body of the webhook event
         let webhook_event = entry.messaging[0];
         console.log(webhook_event);


         // Get the sender PSID
         let sender_psid = webhook_event.sender.id;
         console.log('Sender PSID: ' + sender_psid);

         // Check if the event is a message or postback and
         // pass the event to the appropriate handler function
         if (webhook_event.message) {
            handleMessage(sender_psid, webhook_event.message);
         } else if (webhook_event.postback) {
            handlePostback(sender_psid, webhook_event.postback);
         }

      });

      // Return a '200 OK' response to all events
      res.status(200).send('EVENT_RECEIVED');

   } else {
      // Return a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
   }
}

let getWebhook = (req, res) => {

   let verifyToken = process.env.VERIFY_TOKEN;

   let mode = req.query["hub.mode"];
   let token = req.query["hub.verify_token"];
   let challenge = req.query["hub.challenge"];

   // Check if a token and mode is in the query string of the request
   if (mode && token) {
      // Check the mode and token sent is correct
      if (mode === "subscribe" && token === verifyToken) {
         // Respond with the challenge token from the request
         console.log("WEBHOOK_VERIFIED");
         res.status(200).send(challenge);
      } else {
         // Respond with '403 Forbidden' if verify tokens do not match
         res.sendStatus(403);
      }
   }
}

// Handles messages events
let handleMessage = async (sender_psid, message) => {

   let response;
   if (message && message.quick_reply && message.quick_reply.payload) {
      if (message.quick_reply.payload === "SMALL" || message.quick_reply.payload === "MEDIUM" || message.quick_reply.payload === "LARGE") {
         await chatbotService.sendTypingOn(sender_psid);
         await chatbotService.requestOpenForm(sender_psid);
         return;
      }

      return;
   }

   // Checks if the message contains text
   if (message.text) {
      // Create the payload for a basic text message, which
      // will be added to the body of our request to the Send API
      response = {
         "text": `You sent the message: "${message.text}". Now send me an attachment!`
      }
   } else if (message.attachments) {
      // Get the URL of the message attachment
      let attachment_url = message.attachments[0].payload.url;
      response = {
         "attachment": {
            "type": "template",
            "payload": {
               "template_type": "generic",
               "elements": [{
                  "title": "Is this the right picture?",
                  "subtitle": "Tap a button to answer.",
                  "image_url": attachment_url,
                  "buttons": [
                     {
                        "type": "postback",
                        "title": "Yes!",
                        "payload": "yes",
                     },
                     {
                        "type": "postback",
                        "title": "No!",
                        "payload": "no",
                     }
                  ],
               }]
            }
         }
      }
   }

   // Send the response message
   callSendAPI(sender_psid, response);
}

// Handles messaging_postbacks events
let handlePostback = async (sender_psid, received_postback) => {
   let response;

   // Get the payload for the postback
   let payload = received_postback.payload;

   // Set the response based on the postback payload
   if (payload === 'yes') {
      response = { "text": "Thanks!" }
   }

   else if (payload === 'no') {
      response = { "text": "Oops, try sending another image." }
   }

   else if (payload === "GET_STARTED" || payload === "RESTART_BOT" || payload === "WELCOME_MESSAGE") {
      let userName = await chatbotService.getUserProfile(sender_psid);
      await chatbotService.sendResponseWelcomeNewCustomer(userName, sender_psid);
   }

   else if (payload === "MAIN_MENU") {
      await chatbotService.sendMenuCakes(sender_psid)
   }

   // else if (payload === "MENU_CAKES") {
   //    await chatbotService.sendMenuCakes(sender_psid)
   // }

   else if (payload === "MENU_SPECIAL_CAKE") {
      await chatbotService.sendMenuSpecialCake(sender_psid)
   }

   else if (payload === "SHOW_DETAIL_TRIPLE_CHOCO") {
      await chatbotService.showDetailTripleChoco(sender_psid)
   }

   else if (payload === "SHOW_DETAIL_RED_VELVET") {
      await chatbotService.showDetailRedvelvet(sender_psid)
   }

   else if (payload === "ORDER_NOW") {
      await chatbotService.sendSizeOption(sender_psid)
   }

   else if (payload === "BACK_TO_MENU_CAKES") {
      await chatbotService.backToMenuCakes(sender_psid)
   }

   else if (payload === "CARE_HELP") {
      response = { "text": "Xin quý khách vui lòng đợi trong giây lát <3" }
   }
   // Send the message to acknowledge the postback
   callSendAPI(sender_psid, response);
}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
   // Construct the message body
   let request_body = {
      "recipient": {
         "id": sender_psid
      },
      "message": response
   }

   // Send the HTTP request to the Messenger Platform
   request({
      "uri": "https://graph.facebook.com/v14.0/me/messages",
      "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
      "method": "POST",
      "json": request_body
   }, (err, res, body) => {
      if (!err) {
         console.log('message sent!')
      } else {
         console.error("Unable to send message:" + err);
      }
   });
}

let setUpUserFacebookProfile = async (req, res) => {
   // Send the HTTP request to the Messenger Platform
   try {
      await chatbotService.setUpMessengerPlatform(PAGE_ACCESS_TOKEN);
      return res.status(200).json({
         message: "OK"
      });
   } catch (e) {
      console.log(e)
      return res.status(500).json({
         "message": "Error from the node server"
      })
   }
};


let handleOrderForm = (req, res) => {
   return res.render("orderForm.ejs", {
      facebookAppId: process.env.FACEBOOK_APP_ID
   })
}

let handlePostOrderForm = async (req, res) => {
   try {

      let response1 = {
         "text": `---Thông tin đơn hàng đã chốt---
          \nTên Khách hàng: ${req.body.customerName}
          \nĐịa chỉ: ${req.body.address}
          \nSố điện thoại: ${req.body.phoneNumber}
          \nThời gian nhận hàng: ${req.body.receivedTime}
          `
      };

      await chatbotService.sendMessage("7963952796979199", response1);

      return res.status(200).json({
         message: "ok"
      });
   } catch (e) {
      console.log("Lỗi post order form:", e)
      return res.status(500).json({
         message: "Lỗi server"
      });
   }
}

module.exports = {
   getHomepage: getHomepage,
   postWebhook: postWebhook,
   getWebhook: getWebhook,
   handleMessage: handleMessage,
   handlePostback: handlePostback,
   callSendAPI: callSendAPI,
   setUpUserFacebookProfile: setUpUserFacebookProfile,
   handleOrderForm: handleOrderForm,
   handlePostOrderForm: handlePostOrderForm
}