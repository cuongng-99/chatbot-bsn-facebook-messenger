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
         let response_first = { "text": `Cảm ơn ${username} đã quan tâm đến Bánh sinh nhật Savor Cakes` };
         let response_second = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": "Bánh sinh nhật Savor Cakes",
                        "subtitle": "Bánh tươi mỗi ngày - Freeship - Làm theo yêu cầu",
                        "image_url": "https://www.savor.vn/static/2f60d7a25f1eb7b7b76bbe3ff9cfc2ec/36bd1/banh-sinh-nhat-2022-09-07.webp",
                        "buttons": [
                           // {
                           //    "type": "web_url",
                           //    "url": `${process.env.URL_WEB_VIEW_ORDER}`,
                           //    "title": "Đặt ngay",
                           //    "webview_height_ratio": "full",
                           //    "messenger_extensions": true,
                           //    "fallback_url": `${process.env.URL_WEB_VIEW_ORDER}`
                           // },
                           {
                              "type": "postback",
                              "title": "Xem thêm mẫu bánh",
                              "payload": "MAIN_MENU",
                           },
                           {
                              "type": "postback",
                              "title": "Xem cửa hàng, ship hàng",
                              "payload": "STORE_LOCATION_SHIPPING",
                           },
                           {
                              "type": "postback",
                              "title": "Chat với Nhân viên",
                              "payload": "CARE_HELP",
                           }
                        ],
                     }]
               }
            }
         };

         //send a welcome message
         await markMessageRead(sender_psid);
         await sendMessage(sender_psid, response_first);

         //send a image with button view main menu
         await markMessageRead(sender_psid);
         await sendMessage(sender_psid, response_second);

         resolve("done!")
      } catch (e) {
         reject(e);
      }

   });
};

let sendCareHelp = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": "Dạ <3 Savor xin nghe ạ" }
         let response_2 = { "text": "Mình cần gì cứ nhắn Savor nha ạ <3" }

         await sendMessage(sender_psid, response_1);
         await sendMessage(sender_psid, response_2);
      } catch (e) {
         reject(e)
      }
   })
}

let requestOpenForm = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "button",
                  "text": "Để hoàn thành đơn đơn hàng, bạn hãy cho Savor biết thêm các thông tin nha:",
                  "buttons": [
                     {
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_ORDER}`,
                        "title": "Oke Shop",
                        "webview_height_ratio": "full",
                        "messenger_extensions": true //false: open the webview in new tab
                     },
                     {
                        "type": "postback",
                        "title": "Tôi muốn xem thêm",
                        "payload": "BACK_TO_MENU_CAKES",
                     }
                  ],
               },
            }
         };
         await markMessageRead(sender_psid);
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
                        "title": "BÁNH KEM HÀN QUỐC",
                        "subtitle": "Xịn xò hơn, nhỉnh hơn bánh bento, trang trí xinh xẻo, tối giản, tiết kiệm",
                        "image_url": "https://i.postimg.cc/wBDGbbf6/Screenshot-from-2022-09-18-18-00-57.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "Xem Bánh Hàn Quốc",
                              "payload": "MENU_KOREA_CAKE",
                           },
                        ],
                     },
                     {
                        "title": "BÁNH VỊ ĐẶC BIỆT",
                        "subtitle": "Đa dạng các hương vị từ phổ thông đến độc lạ, phù hợp mọi độ tuổi, giới tính",
                        "image_url": "https://i.postimg.cc/G3NScFny/Screenshot-from-2022-09-08-11-13-11.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "Xem Bánh Đặc Biệt",
                              "payload": "MENU_SPECIAL_CAKE",
                           },
                        ],
                     },
                     {
                        "title": "BÁNH HOA QUẢ",
                        "subtitle": "Sử dụng dâu tây tươi Đà Lạt, chanh leo, hoa quả nhiệt đới kết hợp kem sữa chua ngon lạ",
                        "image_url": "https://i.postimg.cc/tC4PmfMd/Screenshot-from-2022-09-08-11-15-15.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "Xem Bánh Hoa Quả",
                              "payload": "MENU_FRUIT_CAKE",
                           },
                        ],
                     },
                     {
                        "title": "BÁNH TRẺ EM",
                        "subtitle": "Các bánh tạo hình ngộ nghĩnh, có 3 size phù hợp cho mọi cuộc vui gia đình",
                        "image_url": "https://i.postimg.cc/tCc1vgPy/Screenshot-from-2022-09-08-11-16-57.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM Bánh trẻ em",
                              "payload": "MENU_CHILD_CAKE",
                           },
                        ],
                     },
                     {
                        "title": "BÁNH BÔNG HOA",
                        "subtitle": "Bánh kem bắt hoa màu sắc trang nhã, sang trọng",
                        "image_url": "https://i.postimg.cc/bJkSn1wV/Screenshot-from-2022-09-18-18-04-53.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "Xem Bánh Bông Hoa",
                              "payload": "MENU_FLOWER_CAKE",
                           },
                        ],
                     },
                     {
                        "title": "BÁNH SỰ KIỆN",
                        "subtitle": "Phù hợp cho các bữa tiệc công ty, hội nhóm",
                        "image_url": "https://i.postimg.cc/fbXRqDQJ/Screenshot-from-2022-09-18-18-06-43.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "Xem Bánh Sự kiện",
                              "payload": "MENU_EVENT_CAKE",
                           },
                        ],
                     },
                     {
                        "title": "BÁNH VẼ, BÁNH ORDER",
                        "subtitle": "Gửi gắm những hình ảnh, thông điệp ý nghĩa riêng tư. Được chọn vị bánh",
                        "image_url": "https://i.postimg.cc/KzGh72GX/Screenshot-from-2022-09-18-18-08-25.png",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "Xem Bánh Vẽ, Order",
                              "payload": "MENU_ORDER_CAKE",
                           },
                        ],
                     },
                  ]
               }
            }
         };
         await markMessageRead(sender_psid);
         await sendMessage(sender_psid, response);
         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};


let sendSizeOption = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "text": "Bạn muốn chọn cỡ nào:",
            "quick_replies": [
               {
                  "content_type": "text",
                  "title": "Nhỏ 13x7cm",
                  "payload": "SMALL",
               }, {
                  "content_type": "text",
                  "title": "Vừa 17x8cm",
                  "payload": "MEDIUM",
               }, {
                  "content_type": "text",
                  "title": "To 21x8cm",
                  "payload": "LARGE",
               }
            ]
         }
         await markMessageRead(sender_psid);
         await sendQuickReply(sender_psid, response);
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

let markMessageRead = (sender_psid) => {
   return new Promise((resolve, reject) => {
      try {
         let request_body = {
            "recipient": {
               "id": sender_psid
            },
            "sender_action": "mark_seen"
         };

         let url = `https://graph.facebook.com/v6.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;
         request({
            "uri": url,
            "method": "POST",
            "json": request_body

         }, (err, res, body) => {
            if (!err) {
               resolve("done!");
            } else {
               reject("Unable to send message:" + err);
            }
         });
      } catch (e) {
         reject(e);
      }
   })
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
   markMessageRead,
   sendMessage,
   sendMenuCakes,
   setUpMessengerPlatform,
   backToMenuCakes,
   sendSizeOption,
   requestOpenForm,
   sendCareHelp
}