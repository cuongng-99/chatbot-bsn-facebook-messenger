import chatbotService from "./chatbotService"

// BÁNH HÀN QUỐC
const galaxy_blue_info = {
   text_description: "BÁNH KEM GALAXY BLUE: Bánh kem tươi cốt vani, xen giữa các lớp bánh là mứt việt quất, trang trí phong cách Hàn Quốc.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0162-1663572627813.png',
   text_size_price: "Bánh có 2 size:\n - Size 13x7cm: Giá sale 120k (giá gốc 150k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 190k (giá gốc 240k) (Phù hợp 4-6 người)"
}

const pastel_3_mau_info = {
   text_description: "BÁNH KEM 3 MÀU PASTEL: Bánh kem tươi cốt vani, kết hợp mứt dâu tây, trang trí phong cách Hàn Quốc màu pastel hồng - cam - xanh.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0178-1663572628656.png',
   text_size_price: "Bánh có 2 size:\n - Size 13x7cm: Giá sale 120k (giá gốc 150k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 190k (giá gốc 240k) (Phù hợp 4-6 người)"
}


// BÁNH VỊ ĐẶC BIỆT
const red_velet_info = {
   text_description: "BÁNH KEM RED VELVET: Bánh hình trái tim, 2 - 3 lớp cốt Red Velvet. Kết hợp cùng với phần kem vị sữa chua thơm dịu. Mặt bánh và chân bánh được phủ lớp vụn bánh red velvet.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0176-1663572628384.png',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 150k (giá gốc 190k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 220k (giá gốc 275k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 320k (giá gốc 400k) (Phù hợp 7-10 người)"
}

const triple_choco_info = {
   text_description: "BÁNH KEM TRIPLE CHOCO: Bánh 3 lần vị socola: cốt bánh socola, kem tươi vị socola, trang trí socola chip và socola sệt.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0127-1663572628648.jpeg',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 150k (giá gốc 190k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 220k (giá gốc 275k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 320k (giá gốc 400k) (Phù hợp 7-10 người)"
}

const mousse_socola_info = {
   text_description: "MOUSSE SOCOLA: Cốt bánh socola kết hợp cùng lớp mousse ngọt ngào thơm, mịn và hơi đắng nhẹ. Trên mặt bánh là lớp tráng gương socola, trang trí đơn giản nhưng không kém phần sang trọng.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0191-1663560810581.jpeg',
   text_size_price: "Bánh có 2 size:\n - Size 14x6cm: Giá sale 180k (giá gốc 230k) (Phù hợp 2-3 người)\n - Size 18x6cm: Giá sale 270k (giá gốc 350k) (Phù hợp 4-6 người)"
}

const xoai_dua_info = {
   text_description: "BÁNH KEM XOÀI DỪA: Bánh cốt vani trang trí 2 lớp kem dừa và kem xoài, phía trên thêm xoài cắt và cơm dừa.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0147-1663574205768.png',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 150k (giá gốc 190k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 220k (giá gốc 275k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 320k (giá gốc 400k) (Phù hợp 7-10 người)"
}

const green_tea_info = {
   text_description: "BÁNH KEM GREEN TEA: Cốt bánh trà xanh hương nhài và kem tươi vị trà xanh, trang trí socola trắng.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0154-1663572628600.png',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 150k (giá gốc 190k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 220k (giá gốc 275k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 320k (giá gốc 400k) (Phù hợp 7-10 người)"
}

const ca_phe_info = {
   text_description: "BÁNH KEM CÀ PHÊ: Bánh kem 2-3 lớp cốt cà phê kết hợp cùng kem tươi capuchino đậm vị cà phê, tone màu nâu chủ đạo thể hiện sự nam tính, nhã nhặn.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0111-1663560810561.jpeg',
   image_2: 'https://i.postimg.cc/3Jsr38VZ/Screenshot-from-2022-09-18-23-04-12.png',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 150k (giá gốc 190k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 220k (giá gốc 275k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 320k (giá gốc 400k) (Phù hợp 7-10 người)"
}

const ca_phe_cot_dua_info = {
   text_description: "BÁNH KEM CÀ PHÊ CỐT DỪA: Cốt bánh cafe kết hợp cùng kem dừa vị cafe capuchino, phủ bên trên lớp vụn dừa sấy.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0163-1663572628509.png',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 150k (giá gốc 190k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 220k (giá gốc 275k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 320k (giá gốc 400k) (Phù hợp 7-10 người)"
}


// BÁNH HOA QUẢ
const mousse_chanh_leo_info = {
   text_description: "MOUSSE CHANH LEO: Mousse mát lạnh sử dụng chanh leo tươi bỏ hạt và kem tươi whipping cream cùng cốt bánh vani, trang trí socola.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0112-1663560654000.jpeg',
   text_size_price: "Bánh có 2 size:\n - Size 14x6cm: Giá sale 180k (giá gốc 230k) (Phù hợp 2-3 người)\n - Size 18x6cm: Giá sale 270k (giá gốc 350k) (Phù hợp 4-6 người)"
}

const sua_chua_hoa_qua_info = {
   text_description: "BÁNH SỮA CHUA HOA QUẢ: 2 - 3 lớp cốt bánh vani, xen giữa lớp cốt là phần hoa quả cùng kem sữa chua. Trên mặt bánh được trang trí thêm phần hoa quả.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0131-1663574205550.png',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 150k (giá gốc 190k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 220k (giá gốc 275k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 320k (giá gốc 400k) (Phù hợp 7-10 người)"
}

const sua_chua_dau_dalat_info = {
   text_description: "BÁNH KEM SỮA CHUA DÂU ĐÀ LẠT: 2-3 lớp cốt bánh vani kết hợp cùng mứt dâu tây và kem sữa chua thơm dịu, trên mặt bánh trang trí thêm 3-9 quả dâu tây Đà Lạt.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-013-1663560654059.jpeg',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 180k (giá gốc 230k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 270k (giá gốc 350k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 390k (giá gốc 490k) (Phù hợp 7-10 người)"
}

const socola_dau_dalat_info = {
   text_description: "BÁNH SOCOLA TRÒN DÂU ĐÀ LẠT: 2-3 lớp cốt bánh socola kết hợp cùng kem tươi socola, trang trí socola sệt cùng 3-9 quả dâu tây Đà Lạt chua ngọt dịu nhẹ.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0198-1663560654081.jpeg',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 180k (giá gốc 230k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 270k (giá gốc 350k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 390k (giá gốc 490k) (Phù hợp 7-10 người)"
}

const hong_kem_trang_dau_dalat_info = {
   text_description: "BÁNH HỒNG KEM TRẮNG DÂU ĐÀ LẠT: Bánh kem tươi cốt vani, xen giữa các lớp cốt bánh là mứt dâu tây. Bánh màu hồng pastel, mặt bánh phủ lớp kem sữa tan chảy và trang trí cùng 4-10 quả dâu tây Đà Lạt",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0116-1663560654105.jpeg',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 180k (giá gốc 230k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 270k (giá gốc 350k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 390k (giá gốc 490k) (Phù hợp 7-10 người)"
}

const loang_dau_dalat_info = {
   text_description: "BÁNH KEM MÀU LOANG DÂU ĐÀ LẠT: 2-3 lớp cốt bánh vani kết hợp cùng kem tươi và mứt dâu tây. Mặt bánh và thành bánh trang trí màu loang phong cách Hàn Quốc cùng 1-6 quả dâu tây Đà Lạt",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0158-1663560654112.jpeg',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 150k (giá gốc 190k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 220k (giá gốc 275k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 320k (giá gốc 400k) (Phù hợp 7-10 người)"
}


// BÁNH TRẺ EM
const mango_chick_info = {
   text_description: "BÁNH KEM MANGO CHICK: Cốt bánh vani 2 tầng, kết hợp với mứt xoài, kem tươi vị xoài, tạo hình gà con.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0196-1663560682745.jpeg',
   text_size_price: "Bánh có kích thước 13x7cm: Giá sale 150k (giá gốc 190k) (phù hợp 2-4 người)"
}

const red_car_info = {
   text_description: "BÁNH KEM RED CAR: Bánh kem vani kích thước 16x10x8cm, nhân mứt dâu và kem vị dâu tây, bánh trang trí hình ô tô đỏ, sở thích của các bé trai.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0189-1663560682783.jpeg',
   text_size_price: "Bánh có 2 size:\n - Size 16x10x18cm: Giá sale 180k (giá gốc 230k) (Phù hợp 2-4 người)\n - Size 21x13x10cm: Giá sale 270k (giá gốc 350k) (Phù hợp 5-7 người)"
}

const choco_bear_info = {
   text_description: "BÁNH KEM CHOCO BEAR: Cốt bánh socola 2 tầng, kết hợp với kem tươi và socola sệt, tạo hình mặt gấu.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0157-1663560682746.jpeg',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 150k (giá gốc 190k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 220k (giá gốc 275k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 320k (giá gốc 400k) (Phù hợp 7-10 người)"
}

const pinky_princess_info = {
   text_description: "BÁNH KEM PINKY PRINCESS: Bánh kem 3 lớp cốt vani 13x18cm, kêt hợp với mứt dâu và kem vị dâu tây, bánh trang trí búp bê công chúa, sở thích của các bé gái.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-014-1663560682767.jpeg',
   text_size_price: "Bánh có kích thước 13x8cm: Giá sale 180k (giá gốc 230k) (phù hợp 2-4 người)"
}


// BÁNH BÔNG HOA
const bong_lan_trung_muoi_hoa_info = {
   text_description: "BÁNH BLTM BÔNG HOA: Cốt bông lan mềm mịn kết hợp sốt bơ trứng và sốt phô mai béo ngậy, xen giữa chà bông heo và trứng muối ở mỗi lớp bánh.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0154-1663574205776.png',
   text_size_price: "Bánh có 3 size:\n - Size 13x7cm: Giá sale 180k (giá gốc 230k) (Phù hợp 2-3 người)\n - Size 17x8cm: Giá sale 270k (giá gốc 350k) (Phù hợp 4-6 người)\n - Size 21x8cm: Giá sale 390k (giá gốc 490k) (Phù hợp 7-10 người)"
}

const banh_hoa_hong_info = {
   text_description: "BÁNH KEM HOA HỒNG: 3 lớp cốt bánh vani, xen kẽ là lớp mứt dâu. Trang trí hoa hồng trên mặt bánh.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0127-1663560640562.jpeg',
   text_size_price: "Bánh có kích thước 17x8cm: Giá sale 220k (giá gốc 275k) (phù hợp 3-5 người)"
}

const banh_hoa_tim_info = {
   text_description: "BÁNH KEM HOA TÍM: 3 lớp cốt bánh vani, xen kẽ là lớp mứt việt quất. Trang trí hoa tím xung quanh thành bánh.",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0161-1663560640535.jpeg',
   text_size_price: "Bánh có kích thước 13x12cm: Giá sale 220k (giá gốc 275k) (phù hợp 3-5 người)"
}


// BÁNH SỰ KIỆN
const banh_hu_vang_info = {
   text_description: "BÁNH HŨ VÀNG: Bánh gồm 3 lớp cốt vani, mứt dâu tây tạo hình hũ vàng, đường kính 16cm cao 10cm phù hợp để tặng nhân dịp khai trương",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0136-1663560698777.jpeg',
   text_size_price: "Bánh có kích thước 16x10cm: Giá sale 270k (giá gốc 350k) (phù hợp 4-6 người)"
}

const choco_forest_info = {
   text_description: "BÁNH CHOCO FOREST: Bánh hình vuông, kích thước 18x18x8cm, cồm 3 lớp cốt socola kết hợp kem socola, trang trí bằng dâu tây và socola bào",
   image_1: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0135-1663560698772.jpeg',
   text_size_price: "Bánh có kích thước 18x18x8cm: Giá sale 390k (giá gốc 490k) (phù hợp 6-10 người)"
}



// BÁNH HÀN QUỐC
let showDetailGalaxyBlue = (sender_psid) => {
   return showDetailCake(sender_psid, galaxy_blue_info.text_description, galaxy_blue_info.image_1, galaxy_blue_info.text_size_price)
}
let showDetail3MauPastel = (sender_psid) => {
   return showDetailCake(sender_psid, pastel_3_mau_info.text_description, pastel_3_mau_info.image_1, pastel_3_mau_info.text_size_price)
};


// BÁNH VỊ ĐẶC BIỆT
let showDetailRedvelvet = (sender_psid) => {
   return showDetailCake(sender_psid, red_velet_info.text_description, red_velet_info.image_1, red_velet_info.text_size_price)
};
let showDetailTripleChoco = (sender_psid) => {
   return showDetailCake(sender_psid, triple_choco_info.text_description, triple_choco_info.image_1, triple_choco_info.text_size_price)
};
let showDetailMousseSocola = (sender_psid) => {
   return showDetailCake(sender_psid, mousse_socola_info.text_description, mousse_socola_info.image_1, mousse_socola_info.text_size_price)
};
let showDetailXoaiDua = (sender_psid) => {
   return showDetailCake(sender_psid, xoai_dua_info.text_description, xoai_dua_info.image_1, xoai_dua_info.text_size_price)
};
let showDetailGreenTea = (sender_psid) => {
   return showDetailCake(sender_psid, green_tea_info.text_description, green_tea_info.image_1, green_tea_info.text_size_price)
};
let showDetailCaPhe = (sender_psid) => {
   return showDetailCake(sender_psid, ca_phe_info.text_description, ca_phe_info.image_1, ca_phe_info.text_size_price)
};
let showDetailCaPheCotDua = (sender_psid) => {
   return showDetailCake(sender_psid, ca_phe_cot_dua_info.text_description, ca_phe_cot_dua_info.image_1, ca_phe_cot_dua_info.text_size_price)
};


// BÁNH HOA QUẢ
let showDetailMousseChanhLeo = (sender_psid) => {
   return showDetailCake(sender_psid, mousse_chanh_leo_info.text_description, mousse_chanh_leo_info.image_1, mousse_chanh_leo_info.text_size_price)
};
let showDetailSuaChuaHoaQua = (sender_psid) => {
   return showDetailCake(sender_psid, sua_chua_hoa_qua_info.text_description, sua_chua_hoa_qua_info.image_1, sua_chua_hoa_qua_info.text_size_price)
};
let showDetailSuaChuaDauDaLat = (sender_psid) => {
   return showDetailCake(sender_psid, sua_chua_dau_dalat_info.text_description, sua_chua_dau_dalat_info.image_1, sua_chua_dau_dalat_info.text_size_price)
};
let showDetailSocolaDauDaLat = (sender_psid) => {
   return showDetailCake(sender_psid, socola_dau_dalat_info.text_description, socola_dau_dalat_info.image_1, socola_dau_dalat_info.text_size_price)
};
let showDetailHongKemDauDaLat = (sender_psid) => {
   return showDetailCake(sender_psid, hong_kem_trang_dau_dalat_info.text_description, hong_kem_trang_dau_dalat_info.image_1, hong_kem_trang_dau_dalat_info.text_size_price)
};
let showDetailLoangDauDaLat = (sender_psid) => {
   return showDetailCake(sender_psid, loang_dau_dalat_info.text_description, loang_dau_dalat_info.image_1, loang_dau_dalat_info.text_size_price)
};


// BÁNH TRẺ EM
let showDetailMangoChick = (sender_psid) => {
   return showDetailCake(sender_psid, mango_chick_info.text_description, mango_chick_info.image_1, mango_chick_info.text_size_price)
};
let showDetailRedCar = (sender_psid) => {
   return showDetailCake(sender_psid, red_car_info.text_description, red_car_info.image_1, red_car_info.text_size_price)
};
let showDetailChocoBear = (sender_psid) => {
   return showDetailCake(sender_psid, choco_bear_info.text_description, choco_bear_info.image_1, choco_bear_info.text_size_price)
};
let showDetailPinkyPrincess = (sender_psid) => {
   return showDetailCake(sender_psid, pinky_princess_info.text_description, pinky_princess_info.image_1, pinky_princess_info.text_size_price)
};


// BÁNH BÔNG HOA
let showDetailBongLanTrungMuoi = (sender_psid) => {
   return showDetailCake(sender_psid, bong_lan_trung_muoi_hoa_info.text_description, bong_lan_trung_muoi_hoa_info.image_1, bong_lan_trung_muoi_hoa_info.text_size_price)
};
let showDetailBanhHoaHong = (sender_psid) => {
   return showDetailCake(sender_psid, banh_hoa_hong_info.text_description, banh_hoa_hong_info.image_1, banh_hoa_hong_info.text_size_price)
};
let showDetailBanhHoaTim = (sender_psid) => {
   return showDetailCake(sender_psid, banh_hoa_tim_info.text_description, banh_hoa_tim_info.image_1, banh_hoa_tim_info.text_size_price)
};


// BÁNH SỰ KIỆN
let showDetailBanhHuVang = (sender_psid) => {
   return showDetailCake(sender_psid, banh_hu_vang_info.text_description, banh_hu_vang_info.image_1, banh_hu_vang_info.text_size_price)
};

let showDetailChocoForest = (sender_psid) => {
   return showDetailCake(sender_psid, choco_forest_info.text_description, choco_forest_info.image_1, choco_forest_info.text_size_price)
};



let showDetailCake = (sender_psid, text_description, imgae_1, text_size_price) => {
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
                        "title": "Đặt bánh này",
                        "payload": "ORDER_NOW",
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
         // await delay(2000)
         await chatbotService.sendMessage(sender_psid, response_1);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendTypingOn(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_2);
         await chatbotService.sendTypingOff(sender_psid);

         await chatbotService.markMessageRead(sender_psid);
         // await delay(3000)
         await chatbotService.sendMessage(sender_psid, response_3);

         await chatbotService.markMessageRead(sender_psid);
         await chatbotService.sendMessage(sender_psid, response_4);

         resolve("done");
      } catch (e) {
         reject(e);
      }
   });
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

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