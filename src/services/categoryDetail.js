import chatbotService from "./chatbotService"

// BÁNH KEM HÀN QUỐC
const banh_galaxy_blue_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0183-1663560834737.jpeg'
const banh_3_mau_pastel_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0198-1663560834767.jpeg'

// BÁNH VỊ ĐẶC BIỆT
const banh_red_velvet_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0155-1663560810781.jpeg'
const banh_triple_choco_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0116-1663560810555.jpeg'
const banh_moouse_socola_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0191-1663560810581.jpeg'
const banh_xoai_dua_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-019-1663560810588.jpeg'
const banh_green_tea_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0113-1663560810615.jpeg'
const banh_ca_phe_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0111-1663560810561.jpeg'
const banh_ca_phe_cot_dua_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0157-1663560810612.jpeg'

// BÁNH HOA QUẢ
const mousse_chanh_leo_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0112-1663560654000.jpeg'
const banh_sua_chua_hoa_qua_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0197-1663560654266.jpeg'
const banh_sua_chua_dau_da_lat_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-013-1663560654059.jpeg'
const banh_socola_dau_da_lat_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0198-1663560654081.jpeg'
const banh_hong_kem_chay_dau_da_lat_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0116-1663560654105.jpeg'
const banh_kem_mau_loang_dau_da_lat_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0158-1663560654112.jpeg'

// BÁNH TRẺ EM
const banh_mango_chick_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0196-1663560682745.jpeg'
const banh_red_car_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0189-1663560682783.jpeg'
const banh_choco_bear_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0157-1663560682746.jpeg'
const banh_pinky_princess_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-014-1663560682767.jpeg'

// BÁNH BÔNG HOA
const banh_bong_lan_trung_muoi_bong_hoa_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0198-1663560640543.jpeg'
const banh_hoa_hong_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0127-1663560640562.jpeg'
const banh_hoa_tim_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0161-1663560640535.jpeg'

// BÁNH SỰ KIỆN
const banh_hu_vang_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0136-1663560698777.jpeg'
const banh_choco_forest_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0135-1663560698772.jpeg'

// BÁNH VẼ, BÁNH ORDER
const banh_thong_diep_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0158-1663560672670.jpeg'
const banh_coc_bia_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0125-1663560672648.jpeg'
const banh_2_nguoi_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0125-1663560672626.jpeg'
const banh_con_ho_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0165-1663560672636.jpeg'
const banh_tot_nghiep_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0193-1663560672627.jpeg'
const banh_ve_me_image = 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0170-1663560672576.jpeg'
const combo_2_banh_image = ''


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

let sendMenuChildCake = (sender_psid) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "generic",
                  "elements": [
                     {
                        "title": "Bánh kem Mango Chick",
                        "subtitle": "Giá chỉ từ 150k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH MANGO CHICK",
                              "payload": "SHOW_MANGO_CHICK",
                           },
                        ],
                        "image_url": banh_mango_chick_image,
                     },
                     {
                        "title": "Bánh kem Red Car",
                        "subtitle": "2 cỡ bánh, giá chỉ từ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH RED CAR",
                              "payload": "SHOW_RED_CAR",
                           },
                        ],
                        "image_url": banh_red_car_image,
                     },
                     {
                        "title": "Bánh kem Choco Bear",
                        "subtitle": "3 cỡ bánh, giá chỉ từ 150k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH CHOCO BEAR",
                              "payload": "SHOW_CHOCO_BEAR",
                           },
                        ],
                        "image_url": banh_choco_bear_image,
                     },
                     {
                        "title": "Bánh kem Pinky princess",
                        "subtitle": "Giá chỉ 180k",
                        "buttons": [
                           {
                              "type": "postback",
                              "title": "XEM BÁNH PINKY PRINCESS",
                              "payload": "SHOW_PINKY_PRINCESS",
                           },
                        ],
                        "image_url": banh_pinky_princess_image,
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
   sendMenuFruitCake,
   sendMenuChildCake
}