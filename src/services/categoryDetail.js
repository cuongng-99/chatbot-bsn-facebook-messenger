import chatbotService from "./chatbotService"
const {
   banh_han_quoc,
   banh_vi_dac_biet,
   banh_hoa_qua,
   banh_tre_em,
   banh_bong_hoa,
   banh_su_kien,
   banh_ve_order,
   banh_in_anh,
   banh_20_10
} = require("./products")

let sendMenuKoreaCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": banh_han_quoc.sortDescription }
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": banh_han_quoc.listCakes[0].name,
                        "subtitle": banh_han_quoc.listCakes[0].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_han_quoc.listCakes[0].buttonTitleShowCake,
                              "payload": banh_han_quoc.listCakes[0].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_han_quoc.listCakes[0].sampleImage,
                     },
                     {
                        "title": banh_han_quoc.listCakes[1].name,
                        "subtitle": banh_han_quoc.listCakes[1].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_han_quoc.listCakes[1].buttonTitleShowCake,
                              "payload": banh_han_quoc.listCakes[1].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_han_quoc.listCakes[1].sampleImage,
                     }
                  ]
               }
            }
         };
         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendTypingOn(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);
         await chatbotService.sendTypingOff(sender_psid)

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let sendMenuSpecialCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": banh_vi_dac_biet.sortDescription }
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": banh_vi_dac_biet.listCakes[0].name,
                        "subtitle": banh_vi_dac_biet.listCakes[0].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_vi_dac_biet.listCakes[0].buttonTitleShowCake,
                              "payload": banh_vi_dac_biet.listCakes[0].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_vi_dac_biet.listCakes[0].sampleImage,
                     },
                     {
                        "title": banh_vi_dac_biet.listCakes[1].name,
                        "subtitle": banh_vi_dac_biet.listCakes[1].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_vi_dac_biet.listCakes[1].buttonTitleShowCake,
                              "payload": banh_vi_dac_biet.listCakes[1].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_vi_dac_biet.listCakes[1].sampleImage,
                     },
                     {
                        "title": banh_vi_dac_biet.listCakes[2].name,
                        "subtitle": banh_vi_dac_biet.listCakes[2].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_vi_dac_biet.listCakes[2].buttonTitleShowCake,
                              "payload": banh_vi_dac_biet.listCakes[2].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_vi_dac_biet.listCakes[2].sampleImage,
                     },
                     {
                        "title": banh_vi_dac_biet.listCakes[3].name,
                        "subtitle": banh_vi_dac_biet.listCakes[3].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_vi_dac_biet.listCakes[3].buttonTitleShowCake,
                              "payload": banh_vi_dac_biet.listCakes[3].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_vi_dac_biet.listCakes[3].sampleImage,
                     },
                     {
                        "title": banh_vi_dac_biet.listCakes[4].name,
                        "subtitle": banh_vi_dac_biet.listCakes[4].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_vi_dac_biet.listCakes[4].buttonTitleShowCake,
                              "payload": banh_vi_dac_biet.listCakes[4].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_vi_dac_biet.listCakes[4].sampleImage,
                     },
                     {
                        "title": banh_vi_dac_biet.listCakes[5].name,
                        "subtitle": banh_vi_dac_biet.listCakes[5].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_vi_dac_biet.listCakes[5].buttonTitleShowCake,
                              "payload": banh_vi_dac_biet.listCakes[5].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_vi_dac_biet.listCakes[5].sampleImage,
                     },
                     {
                        "title": banh_vi_dac_biet.listCakes[6].name,
                        "subtitle": banh_vi_dac_biet.listCakes[6].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_vi_dac_biet.listCakes[6].buttonTitleShowCake,
                              "payload": banh_vi_dac_biet.listCakes[6].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_vi_dac_biet.listCakes[6].sampleImage,
                     },
                  ]
               }
            }
         };

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.sendTypingOn(sender_psid);
         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);
         await chatbotService.sendTypingOff(sender_psid);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let sendMenuFruitCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": banh_hoa_qua.sortDescription }
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": banh_hoa_qua.listCakes[0].name,
                        "subtitle": banh_hoa_qua.listCakes[0].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_hoa_qua.listCakes[0].buttonTitleShowCake,
                              "payload": banh_hoa_qua.listCakes[0].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_hoa_qua.listCakes[0].sampleImage,
                     },
                     {
                        "title": banh_hoa_qua.listCakes[1].name,
                        "subtitle": banh_hoa_qua.listCakes[1].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_hoa_qua.listCakes[1].buttonTitleShowCake,
                              "payload": banh_hoa_qua.listCakes[1].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_hoa_qua.listCakes[1].sampleImage,
                     },
                     {
                        "title": banh_hoa_qua.listCakes[2].name,
                        "subtitle": banh_hoa_qua.listCakes[2].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_hoa_qua.listCakes[2].buttonTitleShowCake,
                              "payload": banh_hoa_qua.listCakes[2].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_hoa_qua.listCakes[2].sampleImage,
                     },
                     {
                        "title": banh_hoa_qua.listCakes[3].name,
                        "subtitle": banh_hoa_qua.listCakes[3].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_hoa_qua.listCakes[3].buttonTitleShowCake,
                              "payload": banh_hoa_qua.listCakes[3].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_hoa_qua.listCakes[3].sampleImage,
                     },
                     {
                        "title": banh_hoa_qua.listCakes[4].name,
                        "subtitle": banh_hoa_qua.listCakes[4].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_hoa_qua.listCakes[4].buttonTitleShowCake,
                              "payload": banh_hoa_qua.listCakes[4].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_hoa_qua.listCakes[4].sampleImage,
                     },
                     {
                        "title": banh_hoa_qua.listCakes[5].name,
                        "subtitle": banh_hoa_qua.listCakes[5].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_hoa_qua.listCakes[5].buttonTitleShowCake,
                              "payload": banh_hoa_qua.listCakes[5].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_hoa_qua.listCakes[5].sampleImage,
                     },
                  ]
               }
            }
         };

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let sendMenuChildCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": banh_tre_em.sortDescription }
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": banh_tre_em.listCakes[0].name,
                        "subtitle": banh_tre_em.listCakes[0].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_tre_em.listCakes[0].buttonTitleShowCake,
                              "payload": banh_tre_em.listCakes[0].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_tre_em.listCakes[0].sampleImage,
                     },
                     {
                        "title": banh_tre_em.listCakes[1].name,
                        "subtitle": banh_tre_em.listCakes[1].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_tre_em.listCakes[1].buttonTitleShowCake,
                              "payload": banh_tre_em.listCakes[1].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_tre_em.listCakes[1].sampleImage,
                     },
                     {
                        "title": banh_tre_em.listCakes[2].name,
                        "subtitle": banh_tre_em.listCakes[2].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_tre_em.listCakes[2].buttonTitleShowCake,
                              "payload": banh_tre_em.listCakes[2].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_tre_em.listCakes[2].sampleImage,
                     },
                     {
                        "title": banh_tre_em.listCakes[3].name,
                        "subtitle": banh_tre_em.listCakes[3].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_tre_em.listCakes[3].buttonTitleShowCake,
                              "payload": banh_tre_em.listCakes[3].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_tre_em.listCakes[3].sampleImage,
                     },
                  ]
               }
            }
         };
         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let sendMenuFlowerCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": banh_bong_hoa.sortDescription }
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": banh_bong_hoa.listCakes[0].name,
                        "subtitle": banh_bong_hoa.listCakes[0].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_bong_hoa.listCakes[0].buttonTitleShowCake,
                              "payload": banh_bong_hoa.listCakes[0].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_bong_hoa.listCakes[0].sampleImage,
                     },
                     {
                        "title": banh_bong_hoa.listCakes[1].name,
                        "subtitle": banh_bong_hoa.listCakes[1].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_bong_hoa.listCakes[1].buttonTitleShowCake,
                              "payload": banh_bong_hoa.listCakes[1].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_bong_hoa.listCakes[1].sampleImage,
                     },
                     {
                        "title": banh_bong_hoa.listCakes[2].name,
                        "subtitle": banh_bong_hoa.listCakes[2].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_bong_hoa.listCakes[2].buttonTitleShowCake,
                              "payload": banh_bong_hoa.listCakes[2].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_bong_hoa.listCakes[2].sampleImage,
                     },
                  ]
               }
            }
         };

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let sendMenuEventCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": banh_su_kien.sortDescription }
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": banh_su_kien.listCakes[0].name,
                        "subtitle": banh_su_kien.listCakes[0].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_su_kien.listCakes[0].buttonTitleShowCake,
                              "payload": banh_su_kien.listCakes[0].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_su_kien.listCakes[0].sampleImage,
                     },
                     {
                        "title": banh_su_kien.listCakes[1].name,
                        "subtitle": banh_su_kien.listCakes[1].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_su_kien.listCakes[1].buttonTitleShowCake,
                              "payload": banh_su_kien.listCakes[1].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_su_kien.listCakes[1].sampleImage,
                     },
                  ]
               }
            }
         };
         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let sendMenuOrderCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": banh_ve_order.sortDescription }
         let response_2 = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": banh_ve_order.listCakes[0].name,
                        "subtitle": banh_ve_order.listCakes[0].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_ve_order.listCakes[0].buttonTitleShowCake,
                              "payload": banh_ve_order.listCakes[0].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_ve_order.listCakes[0].sampleImage,
                     },
                     {
                        "title": banh_ve_order.listCakes[1].name,
                        "subtitle": banh_ve_order.listCakes[1].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_ve_order.listCakes[1].buttonTitleShowCake,
                              "payload": banh_ve_order.listCakes[1].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_ve_order.listCakes[1].sampleImage,
                     },
                     {
                        "title": banh_ve_order.listCakes[2].name,
                        "subtitle": banh_ve_order.listCakes[2].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_ve_order.listCakes[2].buttonTitleShowCake,
                              "payload": banh_ve_order.listCakes[2].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_ve_order.listCakes[2].sampleImage,
                     },
                     {
                        "title": banh_ve_order.listCakes[3].name,
                        "subtitle": banh_ve_order.listCakes[3].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_ve_order.listCakes[3].buttonTitleShowCake,
                              "payload": banh_ve_order.listCakes[3].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_ve_order.listCakes[3].sampleImage,
                     },
                     {
                        "title": banh_ve_order.listCakes[4].name,
                        "subtitle": banh_ve_order.listCakes[4].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_ve_order.listCakes[4].buttonTitleShowCake,
                              "payload": banh_ve_order.listCakes[4].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_ve_order.listCakes[4].sampleImage,
                     },
                     {
                        "title": banh_ve_order.listCakes[5].name,
                        "subtitle": banh_ve_order.listCakes[5].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_ve_order.listCakes[5].buttonTitleShowCake,
                              "payload": banh_ve_order.listCakes[5].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_ve_order.listCakes[5].sampleImage,
                     },
                     {
                        "title": banh_ve_order.listCakes[6].name,
                        "subtitle": banh_ve_order.listCakes[6].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_ve_order.listCakes[6].buttonTitleShowCake,
                              "payload": banh_ve_order.listCakes[6].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_ve_order.listCakes[6].sampleImage,
                     },
                     {
                        "title": banh_ve_order.listCakes[7].name,
                        "subtitle": banh_ve_order.listCakes[7].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_ve_order.listCakes[7].buttonTitleShowCake,
                              "payload": banh_ve_order.listCakes[7].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_ve_order.listCakes[7].sampleImage,
                     },
                  ]
               }
            }
         };

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_2);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let sendMenuImageCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": "Dạ Savor gửi các mẫu bánh in ảnh minh họa, mình tham khảo nha" }
         let response_2 = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": banh_in_anh.listCakes[0].name,
                        "subtitle": banh_in_anh.listCakes[0].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_in_anh.listCakes[0].buttonTitleShowCake,
                              "payload": banh_in_anh.listCakes[0].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_in_anh.listCakes[0].sampleImage,
                     },
                     {
                        "title": banh_in_anh.listCakes[1].name,
                        "subtitle": banh_in_anh.listCakes[1].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_in_anh.listCakes[1].buttonTitleShowCake,
                              "payload": banh_in_anh.listCakes[1].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_in_anh.listCakes[1].sampleImage,
                     },
                     {
                        "title": banh_in_anh.listCakes[2].name,
                        "subtitle": banh_in_anh.listCakes[2].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_in_anh.listCakes[2].buttonTitleShowCake,
                              "payload": banh_in_anh.listCakes[2].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_in_anh.listCakes[2].sampleImage,
                     },
                     {
                        "title": banh_in_anh.listCakes[3].name,
                        "subtitle": banh_in_anh.listCakes[3].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_in_anh.listCakes[3].buttonTitleShowCake,
                              "payload": banh_in_anh.listCakes[3].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_in_anh.listCakes[3].sampleImage,
                     },
                  ]
               }
            }
         };

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_2);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};


let sendMenu2010Cake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": banh_20_10.sortDescription }
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": banh_20_10.listCakes[0].name,
                        "subtitle": banh_20_10.listCakes[0].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_20_10.listCakes[0].buttonTitleShowCake,
                              "payload": banh_20_10.listCakes[0].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_20_10.listCakes[0].sampleImage,
                     },
                     {
                        "title": banh_20_10.listCakes[1].name,
                        "subtitle": banh_20_10.listCakes[1].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_20_10.listCakes[1].buttonTitleShowCake,
                              "payload": banh_20_10.listCakes[1].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_20_10.listCakes[1].sampleImage,
                     },
                     {
                        "title": banh_20_10.listCakes[2].name,
                        "subtitle": banh_20_10.listCakes[2].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_20_10.listCakes[2].buttonTitleShowCake,
                              "payload": banh_20_10.listCakes[2].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_20_10.listCakes[2].sampleImage,
                     },
                     {
                        "title": banh_20_10.listCakes[3].name,
                        "subtitle": banh_20_10.listCakes[3].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_20_10.listCakes[3].buttonTitleShowCake,
                              "payload": banh_20_10.listCakes[3].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_20_10.listCakes[3].sampleImage,
                     },
                     {
                        "title": banh_20_10.listCakes[4].name,
                        "subtitle": banh_20_10.listCakes[4].subTitle,
                        "buttons": [
                           {
                              "type": "postback",
                              "title": banh_20_10.listCakes[4].buttonTitleShowCake,
                              "payload": banh_20_10.listCakes[4].buttonPayloadShowCake,
                           },
                        ],
                        "image_url": banh_20_10.listCakes[4].sampleImage,
                     },
                  ]
               }
            }
         };

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

module.exports = {
   sendMenuSpecialCake,
   sendMenuKoreaCake,
   sendMenuFruitCake,
   sendMenuChildCake,
   sendMenuFlowerCake,
   sendMenuEventCake,
   sendMenuOrderCake,
   sendMenuImageCake,
   sendMenu2010Cake
}
