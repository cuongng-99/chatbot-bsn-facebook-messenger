const { camelCase, map } = require("lodash")

// BÁNH HÀN QUỐC
const banh_han_quoc = {
   thumbnail: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0156-1663587838246.jpeg',
   sortDescription: 'Xịn xò hơn, nhỉnh hơn bánh bento, trang trí xinh xẻo, tối giản, tiết kiệm',
   buttonTitleShowCake: "Xem Bánh Hàn Quốc",
   buttonPayloadShowCake: "MENU_KOREA_CAKE",
   listCakes: [
      {
         name: "Bánh kem Galaxy Blue",
         subTitle: "2 cỡ bánh, giá chỉ từ 120k",
         description: "BÁNH KEM GALAXY BLUE: Bánh kem tươi cốt vani, xen giữa các lớp bánh là mứt việt quất, trang trí phong cách Hàn Quốc.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0183-1663560834737.jpeg",
         feedbackImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0162-1663572627813.png",
         buttonTitleShowCake: "Xem bánh Galaxy Blue",
         buttonPayloadShowCake: "SHOW_GALAXY_BLUE",
         buttonTitleOrderCake: "Đặt bánh Galaxy Blue",
         buttonPayloadOrderCake: "ORDER_GALAXY_BLUE",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "120k",
               originalPrice: "150k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "190k",
               originalPrice: "240k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            }
         ]
      },
      {
         name: "Bánh kem 3 Màu Pastel",
         subTitle: "2 cỡ bánh, giá chỉ từ 120k",
         description: "BÁNH KEM 3 MÀU PASTEL: Bánh kem tươi cốt vani, kết hợp mứt dâu tây, trang trí phong cách Hàn Quốc màu pastel hồng - cam - xanh.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0198-1663560834767.jpeg",
         feedbackImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0178-1663572628656.png",
         buttonTitleShowCake: "Xem bánh 3 màu Pastel",
         buttonPayloadShowCake: "SHOW_3_MAU_PASTEL",
         buttonTitleOrderCake: "Đặt bánh 3 màu Pastel",
         buttonPayloadOrderCake: "ORDER_3_MAU_PASTEL",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "120k",
               originalPrice: "150k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "190k",
               originalPrice: "240k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            }
         ]
      }
   ]
}


// BÁNH VỊ ĐẶC BIỆT
const banh_vi_dac_biet = {
   thumbnail: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-011-1663587838150.jpeg',
   sortDescription: 'Các bánh có hương vị đa dạng từ phổ thông đến độc lạ, phù hợp mọi độ tuổi, giới tính',
   buttonTitleShowCake: "Xem Bánh Vị Đặc Biệt",
   buttonPayloadShowCake: "MENU_SPECIAL_CAKE",
   listCakes: [
      {
         name: "Bánh kem Red Velvet sữa chua",
         subTitle: "3 cỡ bánh, giá chỉ từ 150k",
         description: "BÁNH KEM RED VELVET: Bánh hình trái tim, 2 - 3 lớp cốt Red Velvet. Kết hợp cùng với phần kem vị sữa chua thơm dịu. Mặt bánh và chân bánh được phủ lớp vụn bánh red velvet.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0155-1663560810781.jpeg",
         feedbackImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0176-1663572628384.png",
         buttonTitleShowCake: "Xem bánh Red Velvet",
         buttonPayloadShowCake: "SHOW_RED_VELVET",
         buttonTitleOrderCake: "Đặt bánh Red Velvet",
         buttonPayloadOrderCake: "ORDER_RED_VELVET",
         sizeAndPrice: [
            {
               title: "13x7cm", salePrice: "150k",
               originalPrice: "190k", forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "320k", originalPrice: "400k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh kem Triple Choco",
         subTitle: "3 cỡ bánh, giá chỉ từ 150k",
         description: "BÁNH KEM TRIPLE CHOCO: Bánh 3 lần vị socola: cốt bánh socola, kem tươi vị socola, trang trí socola chip và socola sệt.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0116-1663560810555.jpeg",
         feedbackImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0127-1663572628648.jpeg",
         buttonTitleShowCake: "Xem bánh Triple Choco",
         buttonPayloadShowCake: "SHOW_TRIPLE_CHOCO",
         buttonTitleOrderCake: "Đặt bánh Triple Choco",
         buttonPayloadOrderCake: "ORDER_TRIPLE_CHOCO",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "320k", originalPrice: "400k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Mousse Socola",
         subTitle: "2 cỡ bánh, giá chỉ từ 180k",
         description: "MOUSSE SOCOLA: Cốt bánh socola kết hợp cùng lớp mousse ngọt ngào thơm, mịn và hơi đắng nhẹ. Trên mặt bánh là lớp tráng gương socola, trang trí đơn giản nhưng không kém phần sang trọng.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0191-1663560810581.jpeg",
         feedbackImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0191-1663560810581.jpeg",
         buttonTitleShowCake: "Xem mousse Socola",
         buttonPayloadShowCake: "SHOW_MOUSSE_SOCOLA",
         buttonTitleOrderCake: "Đặt mousse Socola",
         buttonPayloadOrderCake: "ORDER_MOUSSE_SOCOLA",
         sizeAndPrice: [
            {
               title: "14x6cm",
               salePrice: "180k", originalPrice: "230k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "18x6cm",
               salePrice: "270k", originalPrice: "350k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            }
         ]
      },
      {
         name: "Bánh kem Xoài Dừa",
         subTitle: "3 cỡ bánh, giá chỉ từ 150k",
         description: "BÁNH KEM XOÀI DỪA: Bánh cốt vani trang trí 2 lớp kem dừa và kem xoài, phía trên thêm xoài cắt và cơm dừa.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-019-1663560810588.jpeg",
         feedbackImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0147-1663574205768.png",
         buttonTitleShowCake: "Xem bánh Xoài Dừa",
         buttonPayloadShowCake: "SHOW_XOAI_DUA",
         buttonTitleOrderCake: "Đặt bánh Xoài Dừa",
         buttonPayloadOrderCake: "ORDER_XOAI_DUA",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "320k", originalPrice: "400k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh kem Green Tea",
         subTitle: "3 cỡ bánh, giá chỉ từ 150k",
         description: "BÁNH KEM GREEN TEA: Cốt bánh trà xanh hương nhài và kem tươi vị trà xanh, trang trí socola trắng.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0113-1663560810615.jpeg",
         feedbackImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0154-1663572628600.png",
         buttonTitleShowCake: "Xem bánh Green Tea",
         buttonPayloadShowCake: "SHOW_GREEN_TEA",
         buttonTitleOrderCake: "Đặt bánh Green Tea",
         buttonPayloadOrderCake: "ORDER_GREEN_TEA",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "320k", originalPrice: "400k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh kem Cà Phê",
         subTitle: "3 cỡ bánh, giá chỉ từ 150k",
         description: "BÁNH KEM CÀ PHÊ: Bánh kem 2-3 lớp cốt cà phê kết hợp cùng kem tươi capuchino đậm vị cà phê, tone màu nâu chủ đạo thể hiện sự nam tính, nhã nhặn.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0111-1663560810561.jpeg",
         feedbackImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0111-1663560810561.jpeg",
         buttonTitleShowCake: "Xem bánh Cà Phê",
         buttonPayloadShowCake: "SHOW_CA_PHE",
         buttonTitleOrderCake: "Đặt bánh Cà Phê",
         buttonPayloadOrderCake: "ORDER_CA_PHE",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "320k", originalPrice: "400k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh kem Cà Phê Cốt Dừa",
         subTitle: "3 cỡ bánh, giá chỉ từ 150k",
         description: "BÁNH KEM CÀ PHÊ CỐT DỪA: Cốt bánh cafe kết hợp cùng kem dừa vị cafe capuchino, phủ bên trên lớp vụn dừa sấy.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0157-1663560810612.jpeg",
         buttonTitleShowCake: "Xem bánh Cà Phê Cốt Dừa",
         buttonPayloadShowCake: "SHOW_CA_PHE_COT_DUA",
         buttonTitleOrderCake: "Đặt bánh Cà Phê Cốt Dừa",
         buttonPayloadOrderCake: "ORDER_CA_PHE_COT_DUA",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "320k", originalPrice: "400k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
   ]
}

// BÁNH HOA QUẢ
const banh_hoa_qua = {
   thumbnail: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0164-1663587838237.jpeg',
   sortDescription: 'Sử dụng dâu tây tươi Đà Lạt, chanh leo, hoa quả nhiệt đới kết hợp kem sữa chua ngon lạ',
   buttonTitleShowCake: "Xem Bánh Hoa Quả",
   buttonPayloadShowCake: "MENU_FRUIT_CAKE",
   listCakes: [
      {
         name: "Mousse Chanh Leo",
         subTitle: "2 cỡ bánh, giá chỉ từ 180k",
         descripion: "MOUSSE CHANH LEO: Mousse mát lạnh sử dụng chanh leo tươi bỏ hạt và kem tươi whipping cream cùng cốt bánh vani, trang trí socola.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0112-1663560654000.jpeg",
         buttonTitleShowCake: "Xem mousse Chanh Leo",
         buttonPayloadShowCake: "SHOW_MOUSSE_CHANH_LEO",
         buttonTitleOrderCake: "Đặt mousse Chanh Leo",
         buttonPayloadOrderCake: "ORDER_MOUSSE_CHANH_LEO",
         sizeAndPrice: [
            {
               title: "14x6cm",
               salePrice: "180k", originalPrice: "230k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "18x6cm",
               salePrice: "270k", originalPrice: "350k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            }
         ]
      },
      {
         name: "Bánh kem sữa chua hoa quả",
         subTitle: "3 cỡ bánh, giá chỉ từ 150k",
         description: "BÁNH SỮA CHUA HOA QUẢ: 2 - 3 lớp cốt bánh vani, xen giữa lớp cốt là phần hoa quả cùng kem sữa chua. Trên mặt bánh được trang trí thêm phần hoa quả.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0197-1663560654266.jpeg",
         buttonTitleShowCake: "Xem bánh SC Hoa Quả",
         buttonPayloadShowCake: "SHOW_BANH_SC_HOA_QUA",
         buttonTitleOrderCake: "Đặt bánh SC Hoa Quả",
         buttonPayloadOrderCake: "ORDER_BANH_SC_HOA_QUA",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "320k", originalPrice: "400k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh kem sữa chua dâu Đà Lạt",
         subTitle: "3 cỡ bánh, giá chỉ từ 180k",
         description: "BÁNH KEM SỮA CHUA DÂU ĐÀ LẠT: 2-3 lớp cốt bánh vani kết hợp cùng mứt dâu tây và kem sữa chua thơm dịu, trên mặt bánh trang trí thêm 3-9 quả dâu tây Đà Lạt.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-013-1663560654059.jpeg",
         buttonTitleShowCake: "Xem bánh SC Dâu",
         buttonPayloadShowCake: "SHOW_SC_DAU_DALAT",
         buttonTitleOrderCake: "Đặt bánh SC Dâu",
         buttonPayloadOrderCake: "ORDER_SC_DAU_DALAT",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "180k", originalPrice: "230k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "270k", originalPrice: "350k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "390k", originalPrice: "490k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh socola dâu Đà Lạt",
         subTitle: "3 cỡ bánh, giá chỉ từ 180k",
         description: "BÁNH SOCOLA TRÒN DÂU ĐÀ LẠT: 2-3 lớp cốt bánh socola kết hợp cùng kem tươi socola, trang trí socola sệt cùng 3-9 quả dâu tây Đà Lạt chua ngọt dịu nhẹ.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0198-1663560654081.jpeg",
         buttonTitleShowCake: "Xem bánh Socola Dâu",
         buttonPayloadShowCake: "SHOW_SOCOLA_DAU_DALAT",
         buttonTitleOrderCake: "Đặt bánh Socola Dâu",
         buttonPayloadOrderCake: "ORDER_SOCOLA_DAU_DALAT",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "180k", originalPrice: "230k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "270k", originalPrice: "350k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "390k", originalPrice: "490k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh hồng kem chảy dâu Đà Lạt",
         subTitle: "3 cỡ bánh, giá chỉ từ 180k",
         description: "BÁNH HỒNG KEM TRẮNG DÂU ĐÀ LẠT: Bánh kem tươi cốt vani, xen giữa các lớp cốt bánh là mứt dâu tây. Bánh màu hồng pastel, mặt bánh phủ lớp kem sữa tan chảy và trang trí cùng 4-10 quả dâu tây Đà Lạt",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0116-1663560654105.jpeg",
         buttonTitleShowCake: "Xem bánh Hồng Kem Chảy",
         buttonPayloadShowCake: "SHOW_HONG_KEM_CHAY_DAU",
         buttonTitleOrderCake: "Đặt bánh Hồng Kem Chảy",
         buttonPayloadOrderCake: "ORDER_HONG_KEM_CHAY_DAU",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "180k", originalPrice: "230k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "270k", originalPrice: "350k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "390k", originalPrice: "490k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh kem màu loang dâu Đà Lạt",
         subTitle: "3 cỡ bánh, giá chỉ từ 150k",
         description: "BÁNH KEM MÀU LOANG DÂU ĐÀ LẠT: 2-3 lớp cốt bánh vani kết hợp cùng kem tươi và mứt dâu tây. Mặt bánh và thành bánh trang trí màu loang phong cách Hàn Quốc cùng 1-6 quả dâu tây Đà Lạt",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0158-1663560654112.jpeg",
         buttonTitleShowCake: "Xem bánh Màu Loang Dâu",
         buttonPayloadShowCake: "SHOW_BANH_LOANG_DAU",
         buttonTitleOrderCake: "Đặt bánh Màu Loang Dâu",
         buttonPayloadOrderCake: "ORDER_BANH_LOANG_DAU",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "320k", originalPrice: "400k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
   ]
}


// BÁNH TRẺ EM
const banh_tre_em = {
   thumbnail: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0140-1663587838102.jpeg",
   sortDescription: "Gồm các bánh tạo hình ngộ nghĩnh, có 3 size phù hợp cho mọi cuộc vui gia đình",
   buttonTitleShowCake: "Xem Bánh Trẻ em",
   buttonPayloadShowCake: "MENU_CHILD_CAKE",
   listCakes: [
      {
         name: "Bánh kem Mango Chick",
         subTitle: "Gá bánh chỉ 150k",
         description: "BÁNH KEM MANGO CHICK: Cốt bánh vani 2 tầng, kết hợp với mứt xoài, kem tươi vị xoài, tạo hình gà con.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0196-1663560682745.jpeg",
         buttonTitleShowCake: "Xem bánh Mango Chick",
         buttonPayloadShowCake: "SHOW_MANGO_CHICK",
         buttonTitleOrderCake: "Đặt bánh Mango Chick",
         buttonPayloadOrderCake: "ORDER_MANGO_CHICK",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
         ]
      },
      {
         name: "Bánh kem Red Car",
         subTitle: "2 cỡ bánh, giá chỉ từ 180k",
         description: "BÁNH KEM RED CAR: Bánh kem vani kích thước 16x10x8cm, nhân mứt dâu và kem vị dâu tây, bánh trang trí hình ô tô đỏ, sở thích của các bé trai.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0189-1663560682783.jpeg",
         buttonTitleShowCake: "Xem bánh Red Car",
         buttonPayloadShowCake: "SHOW_RED_CAR",
         buttonTitleOrderCake: "Đặt bánh Red Car",
         buttonPayloadOrderCake: "ORDER_RED_CAR",
         sizeAndPrice: [
            {
               title: "16x10x18cm",
               salePrice: "180k", originalPrice: "230k",
               forNumberUsers: "Phù hợp 3-5 người",
               payload: "SMALL"
            },
            {
               title: "21x13x10cm",
               salePrice: "270k", originalPrice: "350k",
               forNumberUsers: "Phù hợp 6-10 người",
               payload: "MEDIUM"
            },
         ]
      },
      {
         name: "Bánh kem Choco Bear",
         subTitle: "3 cỡ bánh, giá chỉ từ 150k",
         description: "BÁNH KEM CHOCO BEAR: Cốt bánh socola 2 tầng, kết hợp với kem tươi và socola sệt, tạo hình mặt gấu.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0157-1663560682746.jpeg",
         buttonTitleShowCake: "Xem bánh Choco Bear",
         buttonPayloadShowCake: "SHOW_CHOCO_BEAR",
         buttonTitleOrderCake: "Đặt bánh Choco Bear",
         buttonPayloadOrderCake: "ORDER_CHOCO_BEAR",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "320k", originalPrice: "400k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh kem Pinky princess",
         subTitle: "Giá chỉ 180k",
         description: "BÁNH KEM PINKY PRINCESS: Bánh kem 3 lớp cốt vani 13x18cm, kêt hợp với mứt dâu và kem vị dâu tây, bánh trang trí búp bê công chúa, sở thích của các bé gái.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-014-1663560682767.jpeg",
         buttonTitleShowCake: "Xem bánh Pinky Princess",
         buttonPayloadShowCake: "SHOW_PINKY_PRINCESS",
         buttonTitleOrderCake: "Đặt bánh Pinky Princess",
         buttonPayloadOrderCake: "ORDER_PINKY_PRINCESS",
         sizeAndPrice: [
            {
               title: "13x18cm",
               salePrice: "180k", originalPrice: "230k",
               forNumberUsers: "Phù hợp 3-5 người",
               payload: "SMALL"
            },
         ]
      },
   ]
}

// BÁNH BÔNG HOA
const banh_bong_hoa = {
   thumbnail: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0116-1663587838516.jpeg",
   sortDescription: "Bánh bông hoa gồm Bánh kem bắt hoa kết hợp màu sắc trang nhã, sang trọng",
   buttonTitleShowCake: "Xem Bánh Bông Hoa",
   buttonPayloadShowCake: "MENU_FLOWER_CAKE",
   listCakes: [
      {
         name: "Bánh bông lan trứng muối Bông Hoa",
         subTitle: "3 cỡ bánh, giá chỉ từ 180k",
         description: "BÁNH BLTM BÔNG HOA: Cốt bông lan mềm mịn kết hợp sốt bơ trứng và sốt phô mai béo ngậy, xen giữa chà bông heo và trứng muối ở mỗi lớp bánh.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0198-1663560640543.jpeg",
         feedbackImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0154-1663574205776.png",
         buttonTitleShowCake: "Xem bánh BLTM",
         buttonPayloadShowCake: "SHOW_BANH_BLTM",
         buttonTitleOrderCake: "Đặt bánh BLTM",
         buttonPayloadOrderCake: "ORDER_BANH_BLTM",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "180k", originalPrice: "230k",
               forNumberUsers: "Phù hợp 2-4 người",
               payload: "SMALL"
            },
            {
               title: "17x8cm",
               salePrice: "270k", originalPrice: "350k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "MEDIUM"
            },
            {
               title: "21x8cm",
               salePrice: "390k", originalPrice: "490k",
               forNumberUsers: "Phù hợp 9-12 người",
               payload: "LARGE"
            }
         ]
      },
      {
         name: "Bánh kem Hoa hồng",
         subTitle: "Giá chỉ 220k",
         description: "BÁNH KEM HOA HỒNG: 3 lớp cốt bánh vani, xen kẽ là lớp mứt dâu. Trang trí hoa hồng trên mặt bánh.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0127-1663560640562.jpeg",
         buttonTitleShowCake: "Xem bánh Kem Hoa Hồng",
         buttonPayloadShowCake: "SHOW_BANH_HOA_HONG",
         buttonTitleOrderCake: "Đặt bánh Kem Hoa Hồng",
         buttonPayloadOrderCake: "ORDER_BANH_HOA_HONG",
         sizeAndPrice: [
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "SMALL"
            },
         ]
      },
      {
         name: "Bánh kem Hoa tím",
         subTitle: "Giá chỉ 220k",
         description: "BÁNH KEM HOA TÍM: 3 lớp cốt bánh vani, xen kẽ là lớp mứt việt quất. Trang trí hoa tím xung quanh thành bánh.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0161-1663560640535.jpeg",
         buttonTitleShowCake: "Xem bánh Kem Hoa Tím",
         buttonPayloadShowCake: "SHOW_BANH_HOA_TIM",
         buttonTitleOrderCake: "Đặt bánh Kem Hoa Tím",
         buttonPayloadOrderCake: "ORDER_BANH_HOA_TIM",
         sizeAndPrice: [
            {
               title: "13x12cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người",
               payload: "SMALL"
            },
         ]
      },
   ]
}


// BÁNH SỰ KIỆN
const banh_su_kien = {
   thumbnail: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0125-1663587838149.jpeg",
   sortDescription: "Những chiếc bánh cao cấp, phù hợp cho các bữa tiệc công ty, hội nhóm",
   buttonTitleShowCake: "Xem Bánh Sự Kiện",
   buttonPayloadShowCake: "MENU_EVENT_CAKE",
   listCakes: [
      {
         name: "Bánh hũ vàng",
         subTitle: "Giá chỉ 270k",
         description: "BÁNH HŨ VÀNG: Bánh gồm 3 lớp cốt vani, mứt dâu tây tạo hình hũ vàng, đường kính 16cm cao 10cm phù hợp để tặng nhân dịp khai trương",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0136-1663560698777.jpeg",
         buttonTitleShowCake: "Xem bánh Hũ Vàng",
         buttonPayloadShowCake: "SHOW_BANH_HU_VANG",
         buttonTitleOrderCake: "Đặt bánh Hũ Vàng",
         buttonPayloadOrderCake: "ORDER_BANH_HU_VANG",
         sizeAndPrice: [
            {
               title: "16x10cm",
               salePrice: "270k", originalPrice: "350k",
               forNumberUsers: "Phù hợp 5-8 người ăn",
               payload: "SMALL"
            },
         ]
      },
      {
         name: "Bánh choco forest",
         subTitle: "Giá chỉ 390k",
         description: "BÁNH CHOCO FOREST: Bánh hình vuông, kích thước 18x18x8cm, cồm 3 lớp cốt socola kết hợp kem socola, trang trí bằng dâu tây và socola bào",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0135-1663560698772.jpeg",
         buttonTitleShowCake: "Xem bánh Choco Forest",
         buttonPayloadShowCake: "SHOW_CHOCO_FOREST",
         buttonTitleOrderCake: "Đặt bánh Choco Forest",
         buttonPayloadOrderCake: "ORDER_CHOCO_FOREST",
         sizeAndPrice: [
            {
               title: "18x18x8cm",
               salePrice: "390k", originalPrice: "490k",
               forNumberUsers: "Phù hợp 6-10 người ăn",
               payload: "SMALL"
            },
         ]
      }
   ]
}


// BÁNH VẼ, BÁNH ORDER
const banh_ve_order = {
   thumbnail: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0120-1663587838519.jpeg',
   sortDescription: "Gửi gắm những hình ảnh, thông điệp ý nghĩa riêng tư. Được chọn vị bánh",
   buttonTitleShowCake: "Xem Bánh Vẽ, Order",
   buttonPayloadShowCake: "MENU_ORDER_CAKE",
   listCakes: [
      {
         name: "Bánh Thông điệp",
         subTitle: "Giá chỉ từ 150k",
         sampleImage: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0158-1663560672670.jpeg',
         buttonTitleShowCake: "ĐẶT BÁNH VẼ",
         buttonPayloadShowCake: "ORDER_BANH_VE",
      },
      {
         name: "Bánh Cốc bia",
         subTitle: "Giá chỉ từ 180k",
         sampleImage: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0125-1663560672648.jpeg',
         buttonTitleShowCake: "ĐẶT BÁNH ORDER",
         buttonPayloadShowCake: "ORDER_BANH_VE",
      },
      {
         name: "Bánh Con hổ",
         subTitle: "Giá chỉ từ 180k",
         sampleImage: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0165-1663560672636.jpeg',
         buttonTitleShowCake: "ĐẶT BÁNH ORDER",
         buttonPayloadShowCake: "ORDER_BANH_VE",
      },
      {
         name: "Bánh Tốt nghiệp",
         subTitle: "Giá chỉ từ 180k",
         sampleImage: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0193-1663560672627.jpeg',
         buttonTitleShowCake: "ĐẶT BÁNH ORDER",
         buttonPayloadShowCake: "ORDER_BANH_VE",
      },
      {
         name: "Bánh Vẽ Mẹ",
         subTitle: "Giá chỉ từ 180k",
         sampleImage: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0170-1663560672576.jpeg',
         buttonTitleShowCake: "ĐẶT BÁNH ORDER",
         buttonPayloadShowCake: "ORDER_BANH_VE",
      },
      {
         name: "Viết thông điệp trên đế to",
         subTitle: "Đế to, Hộp to: Thêm 20k",
         sampleImage: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0159-1663587991914.jpeg',
         buttonTitleShowCake: "ĐẶT BÁNH VẼ",
         buttonPayloadShowCake: "ORDER_BANH_VE",
      },
      {
         name: "Bánh hai người",
         subTitle: "Giá chỉ từ 180k",
         sampleImage: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0125-1663560672626.jpeg',
         buttonTitleShowCake: "ĐẶT BÁNH ORDER",
         buttonPayloadShowCake: "ORDER_BANH_VE",
      },
      {
         name: "Combo 2 bánh",
         subTitle: "Giảm 25% so với giá gốc",
         sampleImage: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0139-1663587991897.jpeg',
         buttonTitleShowCake: "ĐẶT COMBO 2 BÁNH",
         buttonPayloadShowCake: "ORDER_BANH_VE",
      },
   ]
}


// BÁNH IN ẢNH
const banh_in_anh = {
   thumbnail: 'https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0195-1664175955728.jpeg',
   sortDescription: 'Gửi gắm các thông điệp ý nghĩa qua những tấm ảnh của riêng bạn',
   buttonTitleShowCake: "Xem Bánh In Ảnh",
   buttonPayloadShowCake: "MENU_PHOTO_CAKE",
   listCakes: [
      {
         name: "Bánh in ảnh tròn tặng bạn bè",
         subTitle: "In thêm ảnh giá chỉ từ 170k, tùy chọn vị bánh",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0148-1664175955612.jpeg",
         buttonTitleShowCake: "ĐẶT BÁNH IN ẢNH",
         buttonPayloadShowCake: "ORDER_BANH_IN_ANH",
      },
      {
         name: "Bánh in ảnh tròn tặng bé",
         subTitle: "In thêm ảnh giá chỉ từ 170k, tùy chọn vị bánh",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0189-1664175955547.jpeg",
         buttonTitleShowCake: "ĐẶT BÁNH IN ẢNH",
         buttonPayloadShowCake: "ORDER_BANH_IN_ANH",
      },
      {
         name: "Bánh in ảnh tròn tặng mẹ",
         subTitle: "In thêm ảnh giá chỉ từ 170k, tùy chọn vị bánh",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0184-1664175955639.jpeg",
         buttonTitleShowCake: "ĐẶT BÁNH IN ẢNH",
         buttonPayloadShowCake: "ORDER_BANH_IN_ANH",
      },
      {
         name: "Bánh in ảnh hình chữ nhật",
         subTitle: "In thêm ảnh giá chỉ từ 500k, tùy chọn vị bánh",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/09/USR-0113-1664175955632.jpeg",
         buttonTitleShowCake: "ĐẶT BÁNH IN ẢNH",
         buttonPayloadShowCake: "ORDER_BANH_IN_ANH",
      },
   ]
}

// BÁNH 20/10

const banh_20_10 = {
   thumbnail: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/10/USR-010-1665131478475.jpeg",
   sortDescription: "Savor Cakes gợi ý 5 mẫu bánh vô cùng ý nghĩa cho ngày 20/10, mình mua 1 còn được thêm 2 đó ạ <3",
   buttonTitleShowCake: "Xem Bánh 20-10",
   buttonPayloadShowCake: "MENU_20_10_CAKE",
   listCakes: [
      {
         name: "Bánh red velvet kem sữa chua (cỡ nhỏ)",
         subTitle: "Thêm 2 quà tặng, giá chỉ 150k",
         description: "BÁNH RED VELVET SỮA CHUA: Chiếc bánh hình tim biểu tượng cho tình yêu, phù hợp nhất cho các cặp đôi yêu nhau hoặc muốn thể hiện tình cảm đặc biệt tới đối phương",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/10/USR-0119-1665131478504.jpeg",
         buttonTitleShowCake: "Xem bánh Red velvet",
         buttonPayloadShowCake: "SHOW_RED_VELVET_20_10",
         buttonTitleOrderCake: "Đặt bánh Red velvet",
         buttonPayloadOrderCake: "ORDER_RED_VELVET_20_10",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người ăn",
               payload: "SMALL"
            },
         ]
      },
      {
         name: "Bánh kem màu loang dâu Đà Lạt (cỡ nhỏ)",
         subTitle: "Thêm 2 quà tặng, giá chỉ 150k",
         description: "BÁNH KEM LOANG DÂU ĐÀ LẠT:  Top bánh kem bán chạy nhất của Savor và không thể thiếu trong dịp 20/10. Bánh có cốt vani, xem giữa các lớp cốt là mứt dâu tây. Sắc đỏ nhìn thôi là đê mê nha ạ",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/10/USR-0140-1665131478485.jpeg",
         buttonTitleShowCake: "Xem bánh Loang Dâu",
         buttonPayloadShowCake: "SHOW_LOANG_DAU_20_10",
         buttonTitleOrderCake: "Đặt bánh Loang dâu",
         buttonPayloadOrderCake: "ORDER_LOANG_DAU_20_10",
         sizeAndPrice: [
            {
               title: "13x7cm",
               salePrice: "150k", originalPrice: "190k",
               forNumberUsers: "Phù hợp 2-4 người ăn",
               payload: "SMALL"
            },
         ]
      },
      {
         name: "Mousse Chanh Leo (cỡ nhỏ)",
         subTitle: "Thêm 2 quà tặng, giá chỉ 180k",
         description: "MOUSSE CHANH LEO:  Mẫu bánh kem cho ai không thích ăn kem tươi. Savor sử dụng 100% whipping kết hợp với quả chanh leo tươi bỏ hạt. Với vị chua thanh thanh, thêm lớp tráng gương dẻo dẻo dai dai",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/10/USR-0182-1665131478454.jpeg",
         buttonTitleShowCake: "Xem mousse Chanh leo",
         buttonPayloadShowCake: "SHOW_MOUSSE_CHANH_LEO_20_10",
         buttonTitleOrderCake: "Đặt mousse Chanh leo",
         buttonPayloadOrderCake: "ORDER_MOUSSE_CHANH_LEO_20_10",
         sizeAndPrice: [
            {
               title: "14x6cm",
               salePrice: "180k", originalPrice: "230k",
               forNumberUsers: "Phù hợp 2-4 người ăn",
               payload: "SMALL"
            },
         ]
      },
      {
         name: "Bánh kem hoa hồng (cỡ vừa)",
         subTitle: "Thêm 2 quà tặng, giá chỉ 220k",
         description: "BÁNH KEM HOA HỒNG: Nếu bạn muốn trao nhau hạnh phúc, tình yêu và một chút rực rỡ, thì chiếc bánh này sẽ là một sự lựa chọn lý tưởng đấy nhé ^^",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/10/USR-0149-1665131478377.jpeg",
         buttonTitleShowCake: "Xem bánh Hoa hồng",
         buttonPayloadShowCake: "SHOW_HOA_HONG_20_10",
         buttonTitleOrderCake: "Đặt bánh Hoa hồng",
         buttonPayloadOrderCake: "ORDER_HOA_HONG_20_10",
         sizeAndPrice: [
            {
               title: "17x8cm",
               salePrice: "220k", originalPrice: "275k",
               forNumberUsers: "Phù hợp 5-8 người ăn",
               payload: "MEDIUM"
            },
         ]
      },
      {
         name: "Bánh socola dâu Đà Lạt (cỡ vừa)",
         subTitle: "Thêm 2 quà tặng, giá chỉ 270k",
         description: "BÁNH SOCOLA DÂU ĐÀ LẠT: Trao gửi yêu thương mà không nhắc đến biểu tượng của tình yêu - socola thì quả là thiếu sót. Vị 'must try' của Savor, kết hợp với dâu tây cứ phải gọi là perfect match nha ạ.",
         sampleImage: "https://web-work.s3.kstorage.vn/uploads/user-photos/cuongnv.1512%40gmail.com/2022/10/USR-0180-1665131478300.jpeg",
         buttonTitleShowCake: "Xem bánh Socola dâu",
         buttonPayloadShowCake: "SHOW_SOCOLA_DAU_20_10",
         buttonTitleOrderCake: "Đặt bánh Socola dâu",
         buttonPayloadOrderCake: "ORDER_SOCOLA_DAU_20_10",
         sizeAndPrice: [
            {
               title: "17x8cm",
               salePrice: "270k", originalPrice: "350k",
               forNumberUsers: "Phù hợp 5-8 người ăn",
               payload: "MEDIUM"
            },
         ]
      }
   ]
}

const allCategories = [
   banh_han_quoc,
   banh_vi_dac_biet,
   banh_hoa_qua,
   banh_tre_em,
   banh_bong_hoa,
   banh_su_kien,
   banh_20_10
]

let mapPayloadOrder = {}
allCategories.forEach(category => {
   category.listCakes.forEach(cake => {

      let size = cake.sizeAndPrice
      size.forEach(c => {
         c.content_type = "text";
      })
      size = size.map(s => {
         return ["title", "content_type", "payload"].reduce((obj, key) => ({ ...obj, [key]: s[key] }), {});
      })
      mapPayloadOrder[cake.buttonPayloadOrderCake] = {
         name: cake.name,
         sizeButton: size
      }
   })
})
// console.log(mapPayloadOrder["ORDER_GALAXY_BLUE"].sizeButton)

module.exports = {
   banh_han_quoc,
   banh_vi_dac_biet,
   banh_hoa_qua,
   banh_tre_em,
   banh_bong_hoa,
   banh_su_kien,
   banh_ve_order,
   banh_in_anh,
   banh_20_10,
   mapPayloadOrder
}