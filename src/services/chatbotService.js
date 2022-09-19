import request from "request";
require("dotenv").config()


const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN
const banner_chatbot = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0196-1663587838149.jpeg'
const thumbnail_banh_han_quoc = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0156-1663587838246.jpeg'
const thumbnail_banh_dac_biet = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-011-1663587838150.jpeg'
const thumbnail_banh_hoa_qua = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0164-1663587838237.jpeg'
const thumbnail_banh_tre_em = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0140-1663587838102.jpeg'
const thumbnail_banh_bong_hoa = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0116-1663587838516.jpeg'
const thumbnail_banh_su_kien = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0125-1663587838149.jpeg'
const thumbnail_banh_order = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0120-1663587838519.jpeg'


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
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_ORDER}`,
                        "title": "Đặt ngay",
                        "webview_height_ratio": "full",
                        "messenger_extensions": true,
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
                        "image_url": banner_chatbot,
                        "buttons": [
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
                              "title": "Chốt thông tin đặt bánh",
                              "payload": "ORDER_NOW",
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

         await markMessageRead(sender_psid);
         await delay(2000)
         await sendMessage(sender_psid, response_1);

         await markMessageRead(sender_psid);
         await delay(2000)
         await sendMessage(sender_psid, response_2);
      } catch (e) {
         reject(e)
      }
   })
}

let sendStoreLocationAndShipping = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "button",
                  "text": "Danh sách cửa hàng và Thông tin ship hàng",
                  "buttons": [
                     {
                        "type": "postback",
                        "title": "Danh sách cửa hàng",
                        "payload": "SHOW_LIST_STORE",
                     },
                     {
                        "type": "postback",
                        "title": "Chi phí ship hàng",
                        "payload": "SEND_SHIPPING_FEE",
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

let sendListStore = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "text": `Dạ hiện tại Savor đang có 8 địa chỉ bán bánh sinh nhật, mình tham khảo nha:
- Số 342 Lạc Trung, Hai Bà Trưng
- Số 126 Hồ Tùng Mậu, Cầu Giấy
- Số 8 Nguyễn Đổng Chi, Nam Từ Liêm
- Số 207 Giảng Võ, Đống Đa
- Số 18, Đặng Xuân Bảng, Hoàng Mai
- NO-09, Liền Kề 05 Hà Trì, Hà Cầu, Hà Đông (Ngõ 133 Tô Hiệu đi vào 50m)
- Số 37 Nguyễn Sơn, Ngọc Lâm, Long Biên
- 22 Nguyễn Chánh, Trung Hòa, Cầu Giấy`
         }

         await markMessageRead(sender_psid);
         await sendMessage(sender_psid, response);
      } catch (e) {
         reject(e)
      }
   })
}

let sendShippingFee = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = {
            "text": "Hiện Savor đang có chương trình miễn phí ship với đơn hàng từ 220k trở lên (tối đa 50k) và thu phí ship đồng giá 20k đối với đơn hàng dưới 220k."
         }
         let response_2 = { "text": "Chương trình áp dụng cho 12 quận nội thành Hà Nội, nên mình không cần lo về phí ship nha ^^" }

         await markMessageRead(sender_psid);
         await delay(2000)
         await sendMessage(sender_psid, response_1);

         await markMessageRead(sender_psid);
         await delay(2000)
         await sendMessage(sender_psid, response_2);
      } catch (e) {
         reject(e)
      }
   })
}

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
                        "image_url": thumbnail_banh_han_quoc,
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
                        "image_url": thumbnail_banh_dac_biet,
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
                        "image_url": thumbnail_banh_hoa_qua,
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
                        "image_url": thumbnail_banh_tre_em,
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
                        "image_url": thumbnail_banh_bong_hoa,
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
                        "image_url": thumbnail_banh_su_kien,
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
                        "image_url": thumbnail_banh_order,
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
         await delay(2000)
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


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

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
   sendCareHelp,
   sendStoreLocationAndShipping,
   sendListStore,
   sendShippingFee
}