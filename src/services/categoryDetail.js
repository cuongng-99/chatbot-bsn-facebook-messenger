import chatbotService from "./chatbotService"

// BÁNH KEM HÀN QUỐC
const banh_galaxy_blue_image = 'https://i.postimg.cc/rpw1FSrH/B-nh-Galaxy-blue-2.jpg'
const banh_3_mau_pastel_image = 'https://i.postimg.cc/jq7z5qDR/B-nh-pastel-2-2.jpg'

// BÁNH VỊ ĐẶC BIỆT
const banh_red_velvet_image = 'https://i.postimg.cc/gJ66n4kg/Red-ve.jpg'
const banh_triple_choco_image = 'https://i.postimg.cc/7ZsC9j5B/Triple-choco.jpg'
const banh_moouse_socola_image = 'https://i.postimg.cc/R0WWDGfv/B-nh-mousse-scl.jpg'
const banh_xoai_dua_image = 'https://i.postimg.cc/WbStpxw2/B-nh-xo-i-d-a-2.jpg'
const banh_green_tea_image = 'https://i.postimg.cc/ZRF47yfT/B-nh-Green-tea-2.jpg'
const banh_ca_phe_image = 'https://i.postimg.cc/2SzchLWQ/c-ph.jpg'
const banh_ca_phe_cot_dua_image = 'https://i.postimg.cc/TYPf01n6/B-nh-Cafe-2.jpg'

// BÁNH HOA QUẢ
const mousse_chanh_leo_image = 'https://i.postimg.cc/59LnrSq5/Chanh-leo.jpg'
const banh_sua_chua_hoa_qua_image = 'https://i.postimg.cc/K8HPj1Dv/kem-sua-chua.jpg'
const banh_sua_chua_dau_da_lat_image = 'https://i.postimg.cc/Dw8G923V/B-nh-s-a-chua-d-u-t-y-2.jpg'
const banh_socola_dau_da_lat_image = 'https://i.postimg.cc/9fyD20xk/B-nh-socola-d-u-t-y-2.jpg'
const banh_hong_kem_chay_dau_da_lat_image = 'https://i.postimg.cc/1Xdmw1C6/B-nh-h-ng-kem-tr-ng-2.jpg'
const banh_kem_mau_loang_dau_da_lat_image = 'https://i.postimg.cc/hG0KMdZK/B-nh-d-u-m-u-loang-2.jpg'

// BÁNH TRẺ EM
const banh_mango_chick_image = 'https://i.postimg.cc/HnrHpPYL/g-2.jpg'
const banh_red_car_image = 'https://i.postimg.cc/jS0KbXGs/t-2.jpg'
const banh_choco_bear_image = 'https://i.postimg.cc/cHby5MRG/g-u-2.jpg'
const banh_pinky_princess_image = 'https://i.postimg.cc/8PWcMjGz/Pinky-2.jpg'

// BÁNH BÔNG HOA
const banh_bong_lan_trung_muoi_bong_hoa_image = 'https://i.postimg.cc/FFkHX77V/BLTM.jpg'
const banh_hoa_hong_image = 'https://i.postimg.cc/fTxWkp73/hoa-h-ng.jpg'
const banh_hoa_tim_image = 'https://i.postimg.cc/W3FTVHb1/hoa-t-m.jpg'

// BÁNH SỰ KIỆN
const banh_hu_vang_image = 'https://i.postimg.cc/Wb6jsrjg/Hu-vang.jpg'
const banh_choco_forest_image = 'https://i.postimg.cc/9X9CNKnx/vuong.jpg'

// BÁNH VẼ, BÁNH ORDER
const banh_thong_diep_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_2_nguoi_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_coc_bia_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_con_ho_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_tot_nghiep_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_ve_me_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const combo_2_banh_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'


let sendMenuKoreaCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": "Bánh kem Galaxy Blue",
                        "subtitle": "2 cỡ bánh, giá chỉ từ 120k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH GALAXY BLUE",
                              "payload": "SHOW_GALAXY_BLUE",
                           },
                        ],
                        "image_url": banh_galaxy_blue_image,
                     },
                     {
                        "title": "Bánh kem 3 Màu Pastel",
                        "subtitle": "2 cỡ bánh, giá chỉ từ 120k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH 3 MÀU PASTEL",
                              "payload": "SHOW_3_MAU_PASTEL",
                           },
                        ],
                        "image_url": banh_3_mau_pastel_image,
                     }
                  ]
               }
            }
         };

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};


let sendMenuSpecialCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": "Bánh kem Red Velvet sữa chua",
                        "subtitle": "3 cỡ bánh, giá chỉ từ 150k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH RED VELVET",
                              "payload": "SHOW_RED_VELVET",
                           },
                        ],
                        "image_url": banh_red_velvet_image,
                     },
                     {
                        "title": "Bánh kem Triple Choco",
                        "subtitle": "3 cỡ bánh, giá chỉ từ 150k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH TRIPLE CHOCO",
                              "payload": "SHOW_TRIPLE_CHOCO",
                           },
                        ],
                        "image_url": banh_triple_choco_image,
                     },
                     {
                        "title": "Mousse Socola",
                        "subtitle": "2 cỡ bánh, giá chỉ từ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM MOUSSE SOCOLA",
                              "payload": "SHOW_MOUSSE_SOCOLA",
                           },
                        ],
                        "image_url": banh_moouse_socola_image,
                     },
                     {
                        "title": "Bánh kem Xoài Dừa",
                        "subtitle": "3 cỡ bánh, giá chỉ từ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH XOÀI DỪA",
                              "payload": "SHOW_XOAI_DUA",
                           },
                        ],
                        "image_url": banh_xoai_dua_image,
                     },
                     {
                        "title": "Bánh kem Green Tea",
                        "subtitle": "3 cỡ bánh, giá chỉ từ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH GREEN TEA",
                              "payload": "SHOW_GREEN_TEA",
                           },
                        ],
                        "image_url": banh_green_tea_image,
                     },
                     {
                        "title": "Bánh kem Cà Phê",
                        "subtitle": "3 cỡ bánh, giá chỉ từ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH CÀ PHÊ",
                              "payload": "SHOW_CA_PHE",
                           },
                        ],
                        "image_url": banh_ca_phe_image,
                     },
                     {
                        "title": "Bánh kem Cà Phê Cốt Dừa",
                        "subtitle": "3 cỡ bánh, giá chỉ từ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH CÀ PHÊ CỐT DỪA",
                              "payload": "SHOW_CA_PHE_COT_DUA",
                           },
                        ],
                        "image_url": banh_ca_phe_cot_dua_image,
                     },

                  ]
               }
            }
         };

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};

let sendMenuFruitCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": "Mousse Chanh Leo",
                        "subtitle": "2 cỡ bánh, giá chỉ từ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM MOUSSE CHANH LEO",
                              "payload": "SHOW_MOUSSE_CHANH_LEO",
                           },
                        ],
                        "image_url": mousse_chanh_leo_image,
                     },
                     {
                        "title": "Bánh kem sữa chua hoa quả",
                        "subtitle": "3 cỡ bánh, giá chỉ từ 150k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH SC HOA QUẢ",
                              "payload": "SHOW_KEM_SC_HOA_QUA",
                           },
                        ],
                        "image_url": banh_sua_chua_hoa_qua_image,
                     },
                     {
                        "title": "Bánh kem sữa chua dâu Đà Lạt",
                        "subtitle": "3 cỡ bánh, giá chỉ từ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH SC DÂU",
                              "payload": "SHOW_SC_DAU_DALAT",
                           },
                        ],
                        "image_url": banh_sua_chua_dau_da_lat_image,
                     },
                     {
                        "title": "Bánh socola dâu Đà Lạt",
                        "subtitle": "3 cỡ bánh, giá chỉ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH SOCOLA DÂU",
                              "payload": "SHOW_SOCOLA_DAU_DALAT",
                           },
                        ],
                        "image_url": banh_socola_dau_da_lat_image,
                     },
                     {
                        "title": "Bánh hồng kem chảy dâu Đà Lạt",
                        "subtitle": "3 cỡ bánh, giá chỉ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH HỒNG KEM CHẢY",
                              "payload": "SHOW_HONG_KEM_CHAY_DAU",
                           },
                        ],
                        "image_url": banh_hong_kem_chay_dau_da_lat_image,
                     },
                     {
                        "title": "Bánh kem màu loang dâu Đà Lạt",
                        "subtitle": "3 cỡ bánh, giá chỉ 150k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH MÀU LOANG DÂU",
                              "payload": "SHOW_BANH_LOANG_DAU",
                           },
                        ],
                        "image_url": banh_kem_mau_loang_dau_da_lat_image,
                     },
                  ]
               }
            }
         };

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
};




module.exports = {
   sendMenuSpecialCake,
   sendMenuKoreaCake,
   sendMenuFruitCake
}