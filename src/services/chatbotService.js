import request from "request";
require("dotenv").config()


const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN


// Get user's profile
let getUserProfile = async (sender_psid) => {
   return new Promise((resolve, reject) => {
      request({
         "uri": `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`,
         "qs": { "access_token": PAGE_ACCESS_TOKEN },
         "method": "GET",
      }, (err, res, body) => {
         if (!err) {
            body = JSON.parse(body);

            let userName = `${body.first_name} ${body.last_name}`;

            resolve(userName);
            console.log('get user profile success', userName)
         } else {
            reject("Unable to send message:" + err);
         }
      });
   });
}

let setUpMessengerPlatform = (PAGE_ACCESS_TOKEN) => {
   return new Promise((resolve, reject) => {
      try {
         let data = {
            "get_started": {
               "payload": "GET_STARTED"
            },
            "persistent_menu": [
               {
                  "locale": "default",
                  "composer_input_disabled": false,
                  "call_to_actions": [
                     {
                        "type": "web_url",
                        "title": "Truy cập website",
                        "url": "https://www.savor.vn/banh-sinh-nhat/",
                        "webview_height_ratio": "full"
                     },
                     {
                        "type": "postback",
                        "title": "Chat với nhân viên tư vấn",
                        "payload": "CARE_HELP"
                     },
                     {
                        "type": "postback",
                        "title": "Khởi động lại Bot",
                        "payload": "RESTART_BOT"
                     },
                  ]
               }
            ],
            "whitelisted_domains": [
               "https://chatbot-bsn.herokuapp.com/"
            ]
         };

         request({
            "uri": "https://graph.facebook.com/v14.0/me/messenger_profile",
            "qs": { "access_token": PAGE_ACCESS_TOKEN },
            "method": "POST",
            "json": data
         }, (err, res, body) => {
            if (!err) {
               resolve("setup done!");
            } else {
               reject(err);
            }
         });

      } catch (e) {
         reject(e);
      }
   });
};


let sendResponseWelcomeNewCustomer = (username, sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_first = { "text": `Xin chào ${username} đã ghé thăm cửa hàng Bánh sinh nhật SAVOR` };
         let response_second = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": "BÁNH SINH NHẬT SAVOR",
                        "subtitle": "Bánh sinh nhật giá rẻ kinh thật =)",
                        "image_url": "	https://www.savor.vn/static/2f60d7a25f1eb7b7b76bbe3ff9cfc2ec/36bd1/banh-sinh-nhat-2022-09-07.webp",
                        "buttons": [
                           {
                              "type": "web_url",
                              "url": `${process.env.URL_WEB_VIEW_ORDER}`,
                              "title": "ĐẶT NGAY",
                              "webview_height_ratio": "full",
                              "messenger_extensions": true //false: open the webview in new tab
                           },
                           {
                              "type": "postback",
                              "title": "XEM MENU",
                              "payload": "MAIN_MENU",
                           },
                           {
                              "type": "postback",
                              "title": "HƯỚNG DẪN SỬ DỤNG BOT",
                              "payload": "GUIDE_BOT",
                           }
                        ],
                     }]
               }
            }
         };

         //send a welcome message
         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response_first);

         //send a image with button view main menu
         // await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response_second);

         resolve("done!")
      } catch (e) {
         reject(e);
      }

   });
};

let sendMenuType = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "button",
                  "text": "Dưới đây là 2 lựa chọn cho bạn",
                  "buttons": [
                     {
                        "type": "postback",
                        "title": "Menu Bánh sinh nhật",
                        "payload": "MENU_CAKES",
                     },
                     {
                        "type": "postback",
                        "title": "Menu phụ kiện",
                        "payload": "MENU_ACCESSORIES",
                     }
                  ],
               },
            }
         };
         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response);
         resolve("done");
      } catch (e) {
         reject(e);
      }
   });

};

let sendMenuCakes = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": "BÁNH VỊ ĐẶC BIỆT",
                        "subtitle": "Gồm các vị khá đặc biệt",
                        "image_url": "https://i.postimg.cc/G3NScFny/Screenshot-from-2022-09-08-11-13-11.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM MENU",
                              "payload": "MENU_SPECIAL_CAKE",
                           },
                        ],
                     },
                     {
                        "title": "BÁNH KEM DÂU TÂY",
                        "subtitle": "Gồm nhiều dầu tây tươi",
                        "image_url": "https://i.postimg.cc/tC4PmfMd/Screenshot-from-2022-09-08-11-15-15.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM MENU",
                              "payload": "MENU_STRAWBERRY_CAKE",
                           },
                        ],
                     },
                     {
                        "title": "BÁNH TRẺ EM",
                        "subtitle": "Gồm các bánh tạo hình ngộ nghĩnh",
                        "image_url": "https://i.postimg.cc/tCc1vgPy/Screenshot-from-2022-09-08-11-16-57.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM MENU",
                              "payload": "MENU_CHILD_CAKE",
                           },
                        ],
                     },
                  ]
               }
            }
         };
         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response);
         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let sendMenuSpecialCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": "Bánh kem Red Velvet",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM CHI TIẾT",
                              "payload": "SHOW_DETAIL_RED_VELVET",
                           },
                        ],
                        "image_url": "https://www.savor.vn/static/f21768b583d99a0cde5995afeed98392/62c39/red-velvet.webp",
                     },
                     {
                        "title": "Bánh kem Triple Choco",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM CHI TIẾT",
                              "payload": "SHOW_DETAIL_TRIPLE_CHOCO",
                           },
                        ],
                        "image_url": "https://www.savor.vn/static/303297b9ebca00a47327a8a6814935c2/bf99c/triple-choco.webp",
                     },
                     {
                        "title": "Bánh kem Green Tea",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM CHI TIẾT",
                              "payload": "SHOW_DETAIL_GREEN_TEA",
                           },
                        ],
                        "image_url": "https://www.savor.vn/static/3340cbb368123c375658053015e3afee/bf99c/green-tea.webp",
                     },
                     {
                        "title": "Bánh kem Cà phê Cốt dừa",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM CHI TIẾT",
                              "payload": "SHOW_DETAIL_COFFEE_COCONUT",
                           },
                        ],
                        "image_url": "https://www.savor.vn/static/1b4c6e81814b33abce3853ad675f0575/603fc/caphe-cot-dua.webp",
                     },
                  ]
               }
            }
         };

         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response_1);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};


let showDetailRedvelvet = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": "Bánh hình trái tim, 2 - 3 lớp cốt Red Velvet. Kết hợp cùng với phần kem vị sữa chua thơm dịu. Mặt bánh và chân bánh được phủ lớp vụn bánh red velvet." }
         let response_2 = {
            "attachment": {
               "type": "image",
               "payload": {
                  "url": "https://www.savor.vn/static/f21768b583d99a0cde5995afeed98392/62c39/red-velvet.webp",
                  "is_reusable": true
               }
            }
         };
         let response_3 = {
            "attachment": {
               "type": "image",
               "payload": {
                  "url": "https://i.postimg.cc/7hhvV5ms/Screenshot-from-2022-09-15-09-39-20.png",
                  "is_reusable": true
               }
            }
         };
         let response_4 = {
            "attachment": {
               "type": "image",
               "payload": {
                  "url": "https://i.postimg.cc/FFBwvsPv/Screenshot-from-2022-09-15-09-40-48.png",
                  "is_reusable": true
               }
            }
         };
         let response_5 = { "text": "Nhóm bánh đặc biệt có 3 size:\n - Size 13x7cm: 150.000đ (Phù hợp 2-3 người)\n - Size 17x8cm: 220.000đ (Phù hợp 4-6 người)\n - Size 21x8cm: 330.000đ (Phù hợp 6-10 người)" }

         let response_6 = {
            "attachment": {
               "type": "template",
               "payload": {


                  "template_type": "button",
                  "text": "Bạn có muốn đặt bánh này ko?",
                  "buttons": [
                     {
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_ORDER}`,
                        "title": "Đặt ngay",
                        "webview_height_ratio": "full",
                        "messenger_extensions": true //false: open the webview in new tab
                     },
                     {
                        "type": "postback",
                        "title": "Không, Quay về menu",
                        "payload": "BACK_TO_MENU_CAKES",
                     }
                  ],
               },
            }
         }
         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response_1);

         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response_2);

         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response_3);

         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response_4);

         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response_5);

         await sendTypingOn(sender_psid);
         await sendMessage(sender_psid, response_6);

         resolve("done");
         console.log("Send webview done")
      } catch (e) {
         reject(e);
      }
   });
};




let backToMenuCakes = (sender_psid) => {
   sendMenuCakes(sender_psid);
};


let sendQuickReply = (sender_psid, response) => {
   return new Promise((resolve, reject) => {
      try {
         let request_body = {
            "recipient": {
               "id": sender_psid
            },
            "messaging_type": "RESPONSE",
            "message": response
         };

         // Send the HTTP request to the Messenger Platform
         request({
            "uri": "https://graph.facebook.com/v14.0/me/messages",
            "qs": { "access_token": PAGE_ACCESS_TOKEN },
            "method": "POST",
            "json": request_body
         }, (err, res, body) => {
            if (!err) {
               console.log("quick reply sent!");
               resolve('done!')
            } else {
               reject("Unable to send message:" + err);
            }
         });
      } catch (e) {
         reject(e);
      }
   });
};


let sendMessage = (sender_psid, response) => {
   return new Promise((resolve, reject) => {
      try {
         let request_body = {
            "recipient": {
               "id": sender_psid
            },
            "message": response,
         };

         // Send the HTTP request to the Messenger Platform
         request({
            "uri": "https://graph.facebook.com/v14.0/me/messages",
            "qs": { "access_token": PAGE_ACCESS_TOKEN },
            "method": "POST",
            "json": request_body
         }, (err, res, body) => {
            if (!err) {
               console.log("message sent!");
               resolve('done!')
            } else {
               reject("Unable to send message:" + err);
            }
         });
      } catch (e) {
         reject(e);
      }
   });
};

let sendTypingOn = (sender_psid) => {
   return new Promise((resolve, reject) => {
      try {
         let request_body = {
            "recipient": {
               "id": sender_psid
            },
            "sender_action": "typing_on"
         };

         // Send the HTTP request to the Messenger Platform
         request({
            "uri": "https://graph.facebook.com/v14.0/me/messages",
            "qs": { "access_token": PAGE_ACCESS_TOKEN },
            "method": "POST",
            "json": request_body
         }, (err, res, body) => {
            if (!err) {
               resolve('done!')
            } else {
               reject("Unable to send message:" + err);
            }
         });
      } catch (e) {
         reject(e);
      }
   });
};

module.exports = {
   getUserProfile,
   sendResponseWelcomeNewCustomer,
   sendTypingOn,
   sendMessage,
   sendMenuType,
   sendMenuCakes,
   setUpMessengerPlatform,
   sendMenuSpecialCake,
   showDetailRedvelvet,
   backToMenuCakes
}