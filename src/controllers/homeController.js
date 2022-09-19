require('dotenv').config();
import request from "request";
import chatbotService from "../services/chatbotService"
import categoryDetail from "../services/categoryDetail"
import cakeDetail from "../services/cakeDetail"

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

   if (payload === "GET_STARTED" || payload === "RESTART_BOT" || payload === "WELCOME_MESSAGE") {
      let userName = await chatbotService.getUserProfile(sender_psid);
      await chatbotService.sendResponseWelcomeNewCustomer(userName, sender_psid);
   }

   else if (payload === "MAIN_MENU") {
      await chatbotService.sendMenuCakes(sender_psid)
   }

   else if (payload === "CARE_HELP") {
      await chatbotService.sendCareHelp(sender_psid)
   }

   else if (payload === "STORE_LOCATION_SHIPPING") {
      await chatbotService.sendStoreLocationAndShipping(sender_psid)
   }


   // THÔNG TIN CỬA HÀNG, SHIP HÀNG
   else if (payload === "SHOW_LIST_STORE") {
      await chatbotService.sendListStore(sender_psid)
   }

   else if (payload === "SEND_SHIPPING_FEE") {
      await chatbotService.sendShippingFee(sender_psid)
   }


   // BÁNH HÀN QUỐC
   else if (payload === "MENU_KOREA_CAKE") {
      await categoryDetail.sendMenuKoreaCake(sender_psid)
   }
   else if (payload === "SHOW_GALAXY_BLUE") {
      await cakeDetail.showDetailGalaxyBlue(sender_psid)
   }
   else if (payload === "SHOW_3_MAU_PASTEL") {
      await cakeDetail.showDetail3MauPastel(sender_psid)
   }

   // BÁNH ĐẶC BIỆT
   else if (payload === "MENU_SPECIAL_CAKE") {
      await categoryDetail.sendMenuSpecialCake(sender_psid)
   }
   else if (payload === "SHOW_RED_VELVET") {
      await cakeDetail.showDetailRedvelvet(sender_psid)
   }
   else if (payload === "SHOW_TRIPLE_CHOCO") {
      await cakeDetail.showDetailTripleChoco(sender_psid)
   }
   else if (payload === "SHOW_MOUSSE_SOCOLA") {
      await cakeDetail.showDetailMousseSocola(sender_psid)
   }
   else if (payload === "SHOW_XOAI_DUA") {
      await cakeDetail.showDetailXoaiDua(sender_psid)
   }
   else if (payload === "SHOW_GREEN_TEA") {
      await cakeDetail.showDetailGreenTea(sender_psid)
   }
   else if (payload === "SHOW_CA_PHE") {
      await cakeDetail.showDetailCaPhe(sender_psid)
   }
   else if (payload === "SHOW_CA_PHE_COT_DUA") {
      await cakeDetail.showDetailCaPheCotDua(sender_psid)
   }

   // BÁNH HOA QUẢ
   else if (payload === "MENU_FRUIT_CAKE") {
      await categoryDetail.sendMenuFruitCake(sender_psid)
   }
   else if (payload == "SHOW_MOUSSE_CHANH_LEO") {
      await cakeDetail.showDetailMousseChanhLeo(sender_psid)
   }
   else if (payload == "SHOW_KEM_SC_HOA_QUA") {
      await cakeDetail.showDetailSuaChuaHoaQua(sender_psid)
   }
   else if (payload == "SHOW_SC_DAU_DALAT") {
      await cakeDetail.showDetailSuaChuaDauDaLat(sender_psid)
   }
   else if (payload == "SHOW_SOCOLA_DAU_DALAT") {
      await cakeDetail.showDetailSocolaDauDaLat(sender_psid)
   }
   else if (payload == "SHOW_HONG_KEM_CHAY_DAU") {
      await cakeDetail.showDetailHongKemDauDaLat(sender_psid)
   }
   else if (payload == "SHOW_BANH_LOANG_DAU") {
      await cakeDetail.showDetailLoangDauDaLat(sender_psid)
   }


   // BÁNH TRẺ EM
   else if (payload === "MENU_CHILD_CAKE") {
      await categoryDetail.sendMenuChildCake(sender_psid)
   }
   else if (payload == "SHOW_MANGO_CHICK") {
      await cakeDetail.showDetailMangoChick(sender_psid)
   }
   else if (payload == "SHOW_RED_CAR") {
      await cakeDetail.showDetailRedCar(sender_psid)
   }
   else if (payload == "SHOW_CHOCO_BEAR") {
      await cakeDetail.showDetailChocoBear(sender_psid)
   }
   else if (payload == "SHOW_PINKY_PRINCESS") {
      await cakeDetail.showDetailPinkyPrincess(sender_psid)
   }


   // BÁNH BÔNG HOA
   else if (payload === "MENU_FLOWER_CAKE") {
      await categoryDetail.sendMenuFlowerCake(sender_psid)
   }
   else if (payload === "SHOW_BANH_BLTM") {
      await cakeDetail.showDetailBongLanTrungMuoi(sender_psid)
   }
   else if (payload === "SHOW_BANH_HOA_HONG") {
      await cakeDetail.showDetailBanhHoaHong(sender_psid)
   }
   else if (payload === "SHOW_BANH_HOA_TIM") {
      await cakeDetail.showDetailBanhHoaTim(sender_psid)
   }


   // BÁNH SỰ KIỆN
   else if (payload === "MENU_EVENT_CAKE") {
      await categoryDetail.sendMenuEventCake(sender_psid)
   }
   else if (payload === "SHOW_BANH_HU_VANG") {
      await cakeDetail.showDetailBanhHuVang(sender_psid)
   }
   else if (payload === "SHOW_CHOCO_FOREST") {
      await cakeDetail.showDetailChocoForest(sender_psid)
   }


   // BÁNH ORDER
   else if (payload === "MENU_ORDER_CAKE") {
      await categoryDetail.sendMenuOrderCake(sender_psid)
   }
   else if (payload === "ORDER_BANH_VE") {
      response = { "text": "Dạ mình gửi Savor hình ảnh mẫu bánh bạn muốn đặt nha ạ" }
   }


   else if (payload === "ORDER_NOW") {
      response = {
         "text": `Mình gửi giúp Savor các thông tin sau để hoàn thiện đơn order nhé:\n
      - Tên bánh, Cỡ bánh:
      - Tên và số điện thoại người nhận:
      - Địa chỉ nhận hàng:
      - Thời gian nhận hàng:
      - Chữ viết trên đế bánh:
      - Hình thức thanh toán: Nếu được mình chọn chuyển khoản trước nhé. Hoặc mình chọn nhận hàng rồi thanh toán ạ` }
      // await chatbotService.sendSizeOption(sender_psid)
   }

   else if (payload === "BACK_TO_MENU_CAKES") {
      await chatbotService.backToMenuCakes(sender_psid)
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