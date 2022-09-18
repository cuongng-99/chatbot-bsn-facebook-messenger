import request from "request";
require("dotenv").config();
import chatbotService from "./chatbotService"

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN

// BÁNH KEM HÀN QUỐC
const banh_galaxy_blue_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_3_mau_pastel_image = 'https://www.savor.vn/static/b79f6e1e4baa389c96f2ae3d98c337ce/3cd29/banh-3-mau-pastel.webp'

// BÁNH VỊ ĐẶC BIỆT
const banh_red_velvet_image = 'https://www.savor.vn/static/f21768b583d99a0cde5995afeed98392/62c39/red-velvet.webp'
const banh_triple_choco_image = '	https://www.savor.vn/static/303297b9ebca00a47327a8a6814935c2/bf99c/triple-choco.webp'
const banh_moouse_socola_image = 'https://www.savor.vn/static/0acccbd51861a2929ea0e82746fc1766/5dd1f/mousse-socola.webp'
const banh_xoai_dua_image = 'https://www.savor.vn/static/2caafcc74f6289893817ced80cb2e712/b7312/xoai-dua.webp'
const banh_green_tea_image = 'https://www.savor.vn/static/3340cbb368123c375658053015e3afee/bf99c/green-tea.webp'
const banh_ca_phe_image = 'https://www.savor.vn/static/b0d72d506189568ef8a72defdb631653/62c39/banh-cafe.webp'
const banh_ca_phe_cot_dua_image = 'https://www.savor.vn/static/1b4c6e81814b33abce3853ad675f0575/603fc/caphe-cot-dua.webp'

// BÁNH HOA QUẢ
const mousse_chanh_leo_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_sua_chua_hoa_qua_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_sua_chua_dau_da_lat_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_socola_dau_da_lat_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_hong_kem_chay_dau_da_lat_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_kem_mau_loang_dau_da_lat_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'

// BÁNH TRẺ EM
const banh_mango_chick_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_red_car_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_choco_bear_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_pinky_princess_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'

// BÁNH BÔNG HOA
const banh_bong_lan_trung_muoi_bong_hoa_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_hoa_hong_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_hoa_tim_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'

// BÁNH SỰ KIỆN
const banh_hu_vang_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'
const banh_choco_forest_image = 'https://www.savor.vn/static/8aee2f714c511d08708f694d731c01f1/3cd29/banh-galaxy-blue.webp'

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
                        "subtitle": "2 cỡ bánh, giá chỉ 180k",
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
                        "subtitle": "3 cỡ bánh, giá chỉ 180k",
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
                        "subtitle": "3 cỡ bánh, giá chỉ 180k",
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
                        "subtitle": "3 cỡ bánh, giá chỉ 180k",
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
                        "subtitle": "3 cỡ bánh, giá chỉ 180k",
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




module.exports = {
   sendMenuSpecialCake,
   sendMenuKoreaCake
}