const _ = require('lodash');
import chatbotService from "./chatbotService"

const { banh_han_quoc } = require("./products")
const { banh_vi_dac_biet } = require("./products")
const { banh_hoa_qua } = require("./products")
const { banh_tre_em } = require("./products")
const { banh_bong_hoa } = require("./products")
const { banh_su_kien } = require("./products")
const { banh_ve_order } = require("./products")
const { banh_in_anh } = require("./products")


// BÁNH HÀN QUỐC
const galaxy_blue_info = _.filter(banh_han_quoc.listCakes, { name: "Bánh kem Galaxy Blue" })[0]
const pastel_3_mau_info = _.filter(banh_han_quoc.listCakes, { name: "Bánh kem 3 Màu Pastel" })[0]

// BÁNH VỊ ĐẶC BIỆT
const red_velet_info = _.filter(banh_vi_dac_biet.listCakes, { name: "Bánh kem Red Velvet sữa chua" })[0]
const triple_choco_info = _.filter(banh_vi_dac_biet.listCakes, { name: "Bánh kem Triple Choco" })[0]
const mousse_socola_info = _.filter(banh_vi_dac_biet.listCakes, { name: "Mousse Socola" })[0]
const xoai_dua_info = _.filter(banh_vi_dac_biet.listCakes, { name: "Bánh kem Xoài Dừa" })[0]
const green_tea_info = _.filter(banh_vi_dac_biet.listCakes, { name: "Bánh kem Green Tea" })[0]
const ca_phe_info = _.filter(banh_vi_dac_biet.listCakes, { name: "Bánh kem Cà Phê" })[0]
const ca_phe_cot_dua_info = _.filter(banh_vi_dac_biet.listCakes, { name: "Bánh kem Cà Phê Cốt Dừa" })[0]

// BÁNH HOA QUẢ
const mousse_chanh_leo_info = _.filter(banh_hoa_qua.listCakes, { name: "Mousse Chanh Leo" })[0]
const sua_chua_hoa_qua_info = _.filter(banh_hoa_qua.listCakes, { name: "Bánh kem sữa chua hoa quả" })[0]
const sua_chua_dau_dalat_info = _.filter(banh_hoa_qua.listCakes, { name: "Bánh kem sữa chua dâu Đà Lạt" })[0]
const socola_dau_dalat_info = _.filter(banh_hoa_qua.listCakes, { name: "Bánh socola dâu Đà Lạt" })[0]
const hong_kem_trang_dau_dalat_info = _.filter(banh_hoa_qua.listCakes, { name: "Bánh hồng kem chảy dâu Đà Lạt" })[0]
const loang_dau_dalat_info = _.filter(banh_hoa_qua.listCakes, { name: "Bánh kem màu loang dâu Đà Lạt" })[0]

// BÁNH TRẺ EM
const mango_chick_info = _.filter(banh_tre_em.listCakes, { name: "Bánh kem Mango Chick" })[0]
const red_car_info = _.filter(banh_tre_em.listCakes, { name: "Bánh kem Red Car" })[0]
const choco_bear_info = _.filter(banh_tre_em.listCakes, { name: "Bánh kem Choco Bear" })[0]
const pinky_princess_info = _.filter(banh_tre_em.listCakes, { name: "Bánh kem Pinky princess" })[0]

// BÁNH BÔNG HOA
const bong_lan_trung_muoi_hoa_info = _.filter(banh_bong_hoa.listCakes, { name: "Bánh bông lan trứng muối Bông Hoa" })[0]
const banh_hoa_hong_info = _.filter(banh_bong_hoa.listCakes, { name: "Bánh kem Hoa hồng" })[0]
const banh_hoa_tim_info = _.filter(banh_bong_hoa.listCakes, { name: "Bánh kem Hoa tím" })[0]

// BÁNH SỰ KIỆN
const banh_hu_vang_info = _.filter(banh_su_kien.listCakes, { name: "Bánh hũ vàng" })[0]
const choco_forest_info = _.filter(banh_su_kien.listCakes, { name: "Bánh choco forest" })[0]



// BÁNH HÀN QUỐC
let showDetailGalaxyBlue = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      galaxy_blue_info.description,
      galaxy_blue_info.feedbackImage || galaxy_blue_info.sampleImage,
      getSizeAndPrice(galaxy_blue_info),
      galaxy_blue_info.buttonTitleOrderCake,
      galaxy_blue_info.buttonPayloadOrderCake
   )
}
let showDetail3MauPastel = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      pastel_3_mau_info.description,
      pastel_3_mau_info.feedbackImage || pastel_3_mau_info.sampleImage,
      getSizeAndPrice(pastel_3_mau_info),
      pastel_3_mau_info.buttonTitleOrderCake,
      pastel_3_mau_info.buttonPayloadOrderCake
   )
};


// BÁNH VỊ ĐẶC BIỆT
let showDetailRedvelvet = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      red_velet_info.description,
      red_velet_info.feedbackImage || red_velet_info.sampleImage,
      getSizeAndPrice(red_velet_info),
      red_velet_info.buttonTitleOrderCake,
      red_velet_info.buttonPayloadOrderCake
   )
};
let showDetailTripleChoco = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      triple_choco_info.description,
      triple_choco_info.feedbackImage || triple_choco_info.sampleImage,
      getSizeAndPrice(triple_choco_info),
      triple_choco_info.buttonTitleOrderCake,
      triple_choco_info.buttonPayloadOrderCake
   )
};
let showDetailMousseSocola = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      mousse_socola_info.description,
      mousse_socola_info.feedbackImage || mousse_socola_info.sampleImage,
      getSizeAndPrice(mousse_socola_info),
      mousse_socola_info.buttonTitleOrderCake,
      mousse_socola_info.buttonPayloadOrderCake
   )
};
let showDetailXoaiDua = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      xoai_dua_info.description,
      xoai_dua_info.feedbackImage || xoai_dua_info.sampleImage,
      getSizeAndPrice(xoai_dua_info),
      xoai_dua_info.buttonTitleOrderCake,
      xoai_dua_info.buttonPayloadOrderCake
   )
};
let showDetailGreenTea = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      green_tea_info.description,
      green_tea_info.feedbackImage || green_tea_info.sampleImage,
      getSizeAndPrice(green_tea_info),
      green_tea_info.buttonTitleOrderCake,
      green_tea_info.buttonPayloadOrderCake
   )
};
let showDetailCaPhe = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      ca_phe_info.description,
      ca_phe_info.feedbackImage || ca_phe_info.sampleImage,
      getSizeAndPrice(ca_phe_info),
      ca_phe_info.buttonTitleOrderCake,
      ca_phe_info.buttonPayloadOrderCake
   )
};
let showDetailCaPheCotDua = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      ca_phe_cot_dua_info.description,
      ca_phe_cot_dua_info.feedbackImage || ca_phe_cot_dua_info.sampleImage,
      getSizeAndPrice(ca_phe_cot_dua_info),
      ca_phe_cot_dua_info.buttonTitleOrderCake,
      ca_phe_cot_dua_info.buttonPayloadOrderCake
   )
};


// BÁNH HOA QUẢ
let showDetailMousseChanhLeo = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      mousse_chanh_leo_info.description,
      mousse_chanh_leo_info.feedbackImage || mousse_chanh_leo_info.sampleImage,
      getSizeAndPrice(mousse_chanh_leo_info),
      mousse_chanh_leo_info.buttonTitleOrderCake,
      mousse_chanh_leo_info.buttonPayloadOrderCake
   )
};
let showDetailSuaChuaHoaQua = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      sua_chua_hoa_qua_info.description,
      sua_chua_hoa_qua_info.feedbackImage || sua_chua_hoa_qua_info.sampleImage,
      getSizeAndPrice(sua_chua_hoa_qua_info),
      sua_chua_hoa_qua_info.buttonTitleOrderCake,
      sua_chua_hoa_qua_info.buttonPayloadOrderCake
   )
};
let showDetailSuaChuaDauDaLat = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      sua_chua_dau_dalat_info.description,
      sua_chua_dau_dalat_info.feedbackImage || sua_chua_dau_dalat_info.sampleImage,
      getSizeAndPrice(sua_chua_dau_dalat_info),
      sua_chua_dau_dalat_info.buttonTitleOrderCake,
      sua_chua_dau_dalat_info.buttonPayloadOrderCake
   )
};
let showDetailSocolaDauDaLat = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      socola_dau_dalat_info.description,
      socola_dau_dalat_info.feedbackImage || socola_dau_dalat_info.sampleImage,
      getSizeAndPrice(socola_dau_dalat_info),
      socola_dau_dalat_info.buttonTitleOrderCake,
      socola_dau_dalat_info.buttonPayloadOrderCake
   )
};
let showDetailHongKemDauDaLat = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      hong_kem_trang_dau_dalat_info.description,
      hong_kem_trang_dau_dalat_info.feedbackImage || hong_kem_trang_dau_dalat_info.sampleImage,
      getSizeAndPrice(hong_kem_trang_dau_dalat_info),
      hong_kem_trang_dau_dalat_info.buttonTitleOrderCake,
      hong_kem_trang_dau_dalat_info.buttonPayloadOrderCake
   )
};
let showDetailLoangDauDaLat = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      loang_dau_dalat_info.description,
      loang_dau_dalat_info.feedbackImage || loang_dau_dalat_info.sampleImage,
      getSizeAndPrice(loang_dau_dalat_info),
      loang_dau_dalat_info.buttonTitleOrderCake,
      loang_dau_dalat_info.buttonPayloadOrderCake
   )
};


// BÁNH TRẺ EM
let showDetailMangoChick = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      mango_chick_info.description,
      mango_chick_info.feedbackImage || mango_chick_info.sampleImage,
      getSizeAndPrice(mango_chick_info),
      mango_chick_info.buttonTitleOrderCake,
      mango_chick_info.buttonPayloadOrderCake
   )
};
let showDetailRedCar = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      red_car_info.description,
      red_car_info.feedbackImage || red_car_info.sampleImage,
      getSizeAndPrice(red_car_info),
      red_car_info.buttonTitleOrderCake,
      red_car_info.buttonPayloadOrderCake
   )
};
let showDetailChocoBear = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      choco_bear_info.description,
      choco_bear_info.feedbackImage || choco_bear_info.sampleImage,
      getSizeAndPrice(choco_bear_info),
      choco_bear_info.buttonTitleOrderCake,
      choco_bear_info.buttonPayloadOrderCake
   )
};
let showDetailPinkyPrincess = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      pinky_princess_info.description,
      pinky_princess_info.feedbackImage || pinky_princess_info.sampleImage,
      getSizeAndPrice(pinky_princess_info),
      pinky_princess_info.buttonTitleOrderCake,
      pinky_princess_info.buttonPayloadOrderCake
   )
};


// BÁNH BÔNG HOA
let showDetailBongLanTrungMuoi = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      bong_lan_trung_muoi_hoa_info.description,
      bong_lan_trung_muoi_hoa_info.feedbackImage || bong_lan_trung_muoi_hoa_info.sampleImage,
      getSizeAndPrice(bong_lan_trung_muoi_hoa_info),
      bong_lan_trung_muoi_hoa_info.buttonTitleOrderCake,
      bong_lan_trung_muoi_hoa_info.buttonPayloadOrderCake
   )
};
let showDetailBanhHoaHong = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      banh_hoa_hong_info.description,
      banh_hoa_hong_info.feedbackImage || banh_hoa_hong_info.sampleImage,
      getSizeAndPrice(banh_hoa_hong_info),
      banh_hoa_hong_info.buttonTitleOrderCake,
      banh_hoa_hong_info.buttonPayloadOrderCake
   )
};
let showDetailBanhHoaTim = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      banh_hoa_tim_info.description,
      banh_hoa_tim_info.feedbackImage || banh_hoa_tim_info.sampleImage,
      getSizeAndPrice(banh_hoa_tim_info),
      banh_hoa_tim_info.buttonTitleOrderCake,
      banh_hoa_tim_info.buttonPayloadOrderCake
   )
};


// BÁNH SỰ KIỆN
let showDetailBanhHuVang = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      banh_hu_vang_info.description,
      banh_hu_vang_info.feedbackImage || banh_hu_vang_info.sampleImage,
      getSizeAndPrice(banh_hu_vang_info),
      banh_hu_vang_info.buttonTitleOrderCake,
      banh_hu_vang_info.buttonPayloadOrderCake
   )
};
let showDetailChocoForest = (sender_psid) => {
   return showDetailCake(
      sender_psid,
      choco_forest_info.description,
      choco_forest_info.feedbackImage || choco_forest_info.sampleImage,
      getSizeAndPrice(choco_forest_info),
      choco_forest_info.buttonTitleOrderCake,
      choco_forest_info.buttonPayloadOrderCake
   )
};


let getSizeAndPrice = (cake) => {
   let numSize = cake.sizeAndPrice.length
   let text = []
   cake.sizeAndPrice.forEach(c => text.push(`Size: ${c.title}: Giá sale ${c.salePrice} (giá gốc ${c.originalPrice}) (${c.forNumberUsers})`))
   return `Bánh có ${numSize} size:\n - ${text.join("\n - ")}`
}

let showDetailCake = (sender_psid, text_description, imgae_1, text_size_price, buttonTitle, buttonPayload) => {
   return new Promise(async (resolve, reject) => {
      try {
         let response_1 = { "text": text_description }
         let response_2 = {
            "attachment": {
               "type": "image",
               "payload": {
                  "url": imgae_1,
                  "is_reusable": true
               }
            }
         };
         let response_3 = { "text": text_size_price }

         let response_4 = {
            "attachment": {
               "type": "template",
               "payload": {
                  "template_type": "button",
                  "text": "Bạn có muốn đặt bánh này ko?",
                  "buttons": [
                     // {
                     //    "type": "web_url",
                     //    "url": `${process.env.URL_WEB_VIEW_ORDER}`,
                     //    "title": "Đặt ngay",
                     //    "webview_height_ratio": "tall",
                     //    "messenger_extensions": true //false: open the webview in new tab
                     // },
                     {
                        "type": "postback",
                        "title": buttonTitle,
                        "payload": buttonPayload,
                     },
                     {
                        "type": "postback",
                        "title": "Xem nhóm bánh khác",
                        "payload": "BACK_TO_MENU_CAKES",
                     },
                     {
                        "type": "postback",
                        "title": "Chat thêm với Nhân viên",
                        "payload": "CARE_HELP",
                     }
                  ],
               },
            }
         }
         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendTypingOn(sender_psid)
         await chatbotService.sendMessage(sender_psid, response_2);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_3);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_4);
         await chatbotService.sendTypingOff(sender_psid)

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
console.log(galaxy_blue_info)
module.exports = {
   showDetailGalaxyBlue,
   showDetail3MauPastel,
   showDetailRedvelvet,
   showDetailTripleChoco,
   showDetailMousseSocola,
   showDetailXoaiDua,
   showDetailGreenTea,
   showDetailCaPhe,
   showDetailCaPheCotDua,
   showDetailMousseChanhLeo,
   showDetailSuaChuaHoaQua,
   showDetailSuaChuaDauDaLat,
   showDetailSocolaDauDaLat,
   showDetailHongKemDauDaLat,
   showDetailLoangDauDaLat,
   showDetailMangoChick,
   showDetailRedCar,
   showDetailChocoBear,
   showDetailPinkyPrincess,
   showDetailBongLanTrungMuoi,
   showDetailBanhHoaHong,
   showDetailBanhHoaTim,
   showDetailBanhHuVang,
   showDetailChocoForest
}