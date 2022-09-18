require("dotenv").config();
import chatbotService from "./chatbotService"

const galaxy_blue_1 = 'https://i.postimg.cc/4NMX4f73/Screenshot-from-2022-09-18-22-50-38.png'
const galaxy_blue_2 = 'https://i.postimg.cc/t4NZsnh5/Screenshot-from-2022-09-18-22-54-30.png'
const pastel_3_mau_1 = 'https://i.postimg.cc/PqfH2P02/Screenshot-from-2022-09-18-22-52-37.png'
const pastel_3_mau_2 = 'https://i.postimg.cc/3Jsr38VZ/Screenshot-from-2022-09-18-23-04-12.png'

let showDetailGalaxyBlue = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": "Bánh kem tươi cốt vani, xen giữa các lớp bánh là mứt việt quất, trang trí phong cách Hàn Quốc." }
         let response_2 = {
            "attachment": {
               "type": "image",
               "payload": {
                  "url": galaxy_blue_1,
                  "is_reusable": true
               }
            }
         };
         let response_3 = {
            "attachment": {
               "type": "image",
               "payload": {
                  "url": galaxy_blue_2,
                  "is_reusable": true
               }
            }
         };
         let response_4 = { "text": "Bánh có 2 size:\n - Size 13x7cm: Giá sale 120k (giá gốc 150k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 190k (giá gốc 240k) (Phù hợp 4-6 người)" }

         let response_5 = {
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
                        "title": "Không, Về Menu",
                        "payload": "BACK_TO_MENU_CAKES",
                     }
                  ],
               },
            }
         }
         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_2);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_3);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_4);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_5);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let showDetail3MauPastel = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": "Bánh kem tươi cốt vani, kết hợp mứt dâu tây, trang trí phong cách Hàn Quốc màu pastel hồng - cam - xanh." }
         let response_2 = {
            "attachment": {
               "type": "image",
               "payload": {
                  "url": pastel_3_mau_1,
                  "is_reusable": true
               }
            }
         };
         let response_3 = {
            "attachment": {
               "type": "image",
               "payload": {
                  "url": pastel_3_mau_2,
                  "is_reusable": true
               }
            }
         };
         let response_4 = { "text": "Bánh có 2 size:\n - Size 13x7cm: Giá sale 120k (giá gốc 150k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 190k (giá gốc 240k) (Phù hợp 4-6 người)" }

         let response_5 = {
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
                        "title": "Không, Về Menu",
                        "payload": "BACK_TO_MENU_CAKES",
                     }
                  ],
               },
            }
         }
         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_2);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_3);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_4);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_5);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};


module.exports = {
   showDetailGalaxyBlue,
   showDetail3MauPastel
}