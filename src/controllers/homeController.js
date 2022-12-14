require('dotenv').config();
const _ = require("lodash")
import request from "request";
import chatbotService from "../services/chatbotService"
import categoryDetail from "../services/categoryDetail"
import cakeDetail from "../services/cakeDetail"
const { mapPayloadOrder } = require("../services/products")

let cakeChoosen = {
   name: "",
   selectedSize: "",
   sizeButton: []
}

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
      if (message.quick_reply.payload === "CARE_HELP") {
         await chatbotService.sendCareHelp(sender_psid)
         return;
      }
      if (message.quick_reply.payload === "SHIPING_FEE") {
         await chatbotService.sendShippingFee(sender_psid)
         return;
      }
      else if (message.quick_reply.payload === "STORE_LOCALTION") {
         await chatbotService.sendListStore(sender_psid)
         return;
      }
      else if (message.quick_reply.payload === "MENU_ACCESSORIES") {
         await chatbotService.sendMenuAccessories(sender_psid)
      }
      else if (["SMALL", "MEDIUM", "LARGE"].includes(message.quick_reply.payload)) {
         if (cakeChoosen.sizeButton.length > 1) {
            cakeChoosen.selectedSize = _.filter(cakeChoosen.sizeButton, { payload: message.quick_reply.payload })[0].title
         }
         await chatbotService.requestFillInfo(cakeChoosen.name, cakeChoosen.selectedSize, sender_psid)
         //await chatbotService.requestOpenForm(sender_psid)
      }
      return;
   }

   // Checks if the message contains text
   if (message.text) {
      // Create persistent after user's message
      await postPersistentMenu(sender_psid);
   }
   // } else if (message.attachments) {
   //    // Get the URL of the message attachment
   //    let attachment_url = message.attachments[0].payload.url;
   //    response = {
   //       "attachment": {
   //          "type": "template",
   //          "payload": {
   //             "template_type": "generic",
   //             "elements": [{
   //                "title": "Is this the right picture?",
   //                "subtitle": "Tap a button to answer.",
   //                "image_url": attachment_url,
   //                "buttons": [
   //                   {
   //                      "type": "postback",
   //                      "title": "Yes!",
   //                      "payload": "yes",
   //                   },
   //                   {
   //                      "type": "postback",
   //                      "title": "No!",
   //                      "payload": "no",
   //                   }
   //                ],
   //             }]
   //          }
   //       }
   //    }
   // }

   // Send the response message
   callSendAPI(sender_psid, response);
}

// Handles messaging_postbacks events
let handlePostback = async (sender_psid, received_postback) => {
   let response;

   // Get the payload for the postback
   let payload = received_postback.payload;

   // Set the response based on the postback payload

   if (payload === "GET_STARTED") {
      await postPersistentMenu(sender_psid);
      await chatbotService.sendResponseWelcomeNewCustomer(sender_psid);
   }
   else if (payload === "RESTART_BOT") {
      await chatbotService.sendResponseWelcomeNewCustomer(sender_psid);
   }

   else if (payload === "MAIN_MENU") {
      await chatbotService.sendMenuCakes(sender_psid)
   }

   else if (payload === "CARE_HELP") {
      await chatbotService.sendCareHelp(sender_psid)
   }

   else if (payload === "ORDER_NOW") {
      // await chatbotService.requestOpenForm(sender_psid)
      await chatbotService.orderNow(sender_psid)
   }

   else if (payload === "STORE_LOCATION_SHIPPING") {
      await chatbotService.sendStoreLocationAndShipping(sender_psid)
   }


   // TH??NG TIN C???A H??NG, SHIP H??NG
   else if (payload === "SHOW_LIST_STORE") {
      await chatbotService.sendListStore(sender_psid)
   }

   else if (payload === "SEND_SHIPPING_FEE") {
      await chatbotService.sendShippingFee(sender_psid)
   }


   // B??NH H??N QU???C
   else if (payload === "MENU_KOREA_CAKE") {
      await categoryDetail.sendMenuKoreaCake(sender_psid)
   }
   else if (payload === "SHOW_GALAXY_BLUE") {
      await cakeDetail.showDetailGalaxyBlue(sender_psid)
   }
   else if (payload === "SHOW_3_MAU_PASTEL") {
      await cakeDetail.showDetail3MauPastel(sender_psid)
   }

   // B??NH ?????C BI???T
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

   // B??NH HOA QU???
   else if (payload === "MENU_FRUIT_CAKE") {
      await categoryDetail.sendMenuFruitCake(sender_psid)
   }
   else if (payload == "SHOW_MOUSSE_CHANH_LEO") {
      await cakeDetail.showDetailMousseChanhLeo(sender_psid)
   }
   else if (payload == "SHOW_BANH_SC_HOA_QUA") {
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


   // B??NH TR??? EM
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


   // B??NH B??NG HOA
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


   // B??NH S??? KI???N
   else if (payload === "MENU_EVENT_CAKE") {
      await categoryDetail.sendMenuEventCake(sender_psid)
   }
   else if (payload === "SHOW_BANH_HU_VANG") {
      await cakeDetail.showDetailBanhHuVang(sender_psid)
   }
   else if (payload === "SHOW_CHOCO_FOREST") {
      await cakeDetail.showDetailChocoForest(sender_psid)
   }


   // B??NH ORDER
   else if (payload === "MENU_ORDER_CAKE") {
      await categoryDetail.sendMenuOrderCake(sender_psid)
   }
   else if (payload === "ORDER_BANH_VE") {
      response = { "text": "D??? m??nh g???i Savor h??nh ???nh m???u b??nh b???n mu???n ?????t nha ???" }
      await chatbotService.sendMessage(sender_psid, response)
   }

   // B??NH IN ???NH
   else if (payload === "MENU_PHOTO_CAKE") {
      await categoryDetail.sendMenuImageCake(sender_psid)
   }
   else if (payload === "ORDER_BANH_IN_ANH") {
      response = { "text": "D??? m??nh g???i gi??p Savor h??nh ???nh mu???n in l??n m???t b??nh nha ???" }
      await chatbotService.sendMessage(sender_psid, response)
   }

   // B??NH 20-10
   else if (payload === "MENU_20_10_CAKE") {
      await categoryDetail.sendMenu2010Cake(sender_psid)
   }
   else if (payload == "SHOW_RED_VELVET_20_10") {
      await cakeDetail.showDetailRedvelvet2010(sender_psid)
   }
   else if (payload == "SHOW_LOANG_DAU_20_10") {
      await cakeDetail.showDetailLoangDau2010(sender_psid)
   }
   else if (payload == "SHOW_MOUSSE_CHANH_LEO_20_10") {
      await cakeDetail.showDetailMousseCL2010(sender_psid)
   }
   else if (payload == "SHOW_HOA_HONG_20_10") {
      await cakeDetail.showDetailHoaHong2010(sender_psid)
   }
   else if (payload == "SHOW_SOCOLA_DAU_20_10") {
      await cakeDetail.showDetailSCLDau2010(sender_psid)
   }


   // L??U TH??NG TIN B??NH V?? C??? B??NH KHI B???M ?????T H??NG
   else if (payload.includes("ORDER")) {
      cakeChoosen.sizeButton = mapPayloadOrder[payload].sizeButton
      cakeChoosen.name = mapPayloadOrder[payload].name
      if (cakeChoosen.sizeButton.length === 1) {
         cakeChoosen.selectedSize = cakeChoosen.sizeButton[0].title
         await chatbotService.requestFillInfo(cakeChoosen.name, cakeChoosen.selectedSize, sender_psid)
      }
      await chatbotService.askingSizeCakes(sender_psid, cakeChoosen.name, cakeChoosen.sizeButton)
      // await chatbotService.requestOpenForm(sender_psid)
   }

   else if (payload === "BACK_TO_MENU_CAKES") {
      await chatbotService.backToMenuCakes(sender_psid)
   }
   else if (payload === "BACK_TO_MENU_CAKE_2010") {
      await categoryDetail.sendMenu2010Cake(sender_psid)
   }
}

let postPersistentMenu = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let data = {
            "psid": sender_psid,
            "persistent_menu": [
               {
                  "locale": "default",
                  "composer_input_disabled": false,
                  "call_to_actions": [
                     {
                        "type": "web_url",
                        "title": "Truy c???p website",
                        "url": "https://www.savor.vn/banh-sinh-nhat/",
                        "webview_height_ratio": "full"
                     },
                     {
                        "type": "postback",
                        "title": "Chat v???i Nh??n vi??n t?? v???n",
                        "payload": "CARE_HELP"
                     },
                     {
                        "type": "postback",
                        "title": "Chat v???i Bot",
                        "payload": "RESTART_BOT"
                     }
                  ]
               }
            ],
         };

         request({
            "uri": "https://graph.facebook.com/v14.0/me/custom_user_settings",
            "qs": { "access_token": PAGE_ACCESS_TOKEN },
            "method": "POST",
            "json": data
         }, (err, res, body) => {
            if (!err) {
               console.log("Setup persistent menu oke")
               resolve("setup done!");
            } else {
               console.log("L???i set persistent menu: ", err)
               reject(err);
            }
         });

      } catch (e) {
         reject(e);
      }
   });
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

// let setUpUserFacebookProfile = async (req, res) => {
//    // Send the HTTP request to the Messenger Platform
//    try {
//       await chatbotService.setUpMessengerPlatform(PAGE_ACCESS_TOKEN);
//       return res.status(200).json({
//          message: "OK"
//       });
//    } catch (e) {
//       console.log(e)
//       return res.status(500).json({
//          "message": "Error from the node server"
//       })
//    }
// };


let handleOrderForm = (req, res) => {
   let senderId = req.params.senderId
   return res.render("orderForm.ejs", {
      senderId: senderId,
      facebookAppId: process.env.FACEBOOK_APP_ID
   })
}

let handlePostOrderForm = async (req, res) => {
   try {

      let response1 = {
         "text": `---Th??ng tin ????n h??ng ???? ch???t---\n
T??n Kh??ch h??ng: ${req.body.customerName}
?????a ch???: ${req.body.address}
S??? ??i???n tho???i: ${req.body.phoneNumber}
Th???i gian nh???n h??ng: ${req.body.receivedTime}
Ch??? tr??n ????? b??nh: ${req.body.letterOnCake}
Ph????ng th???c thanh to??n: ${req.body.paymentType}
`
      };

      await chatbotService.sendMessage(req.body.psid, response1);

      return res.status(200).json({
         message: "L???y th??ng tin th??nh c??ng",
      });
   } catch (e) {
      console.log("L???i post order form:", e)
      return res.status(500).json({
         message: "L???i server"
      });
   }
}

module.exports = {
   getHomepage,
   postWebhook,
   getWebhook,
   handleMessage,
   handlePostback,
   callSendAPI,
   //setUpUserFacebookProfile,
   handleOrderForm,
   handlePostOrderForm
}
