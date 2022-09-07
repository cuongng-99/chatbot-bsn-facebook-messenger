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

let sendResponseWelcomeNewCustomer = (username, sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response_first = { "text": `Xin chào ${username} đã ghé thăm cửa hàng Bánh sinh nhật SAVOR` };
            let response_second = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
                            {
                                "title": "BÁNH SINH NHẬT SAVOR",
                                "subtitle": "Ăn thì ngon - Giá thì rẻ!",
                                "image_url": "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/284659568_2930783953879111_183066845177353758_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=7-Z58X1w8AsAX88HKCo&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-WC8Ulpc9ROXWuCyedSHNS7njm1KvXMlX4f45su3X8vQ&oe=631D1B0F",
                                "buttons": [
                                    {
                                        "type": "postback",
                                        "title": "ĐẶT BÁNH NGAY",
                                        "payload": "ORDER_NOW",
                                    },
                                    {
                                        "type": "postback",
                                        "title": "XEM MENU",
                                        "payload": "MAIN_MENU",
                                    },
                                    {
                                        "type": "postback",
                                        "title": "HƯỚNG DẪN SỬ DỤNG BOT",
                                        "payload": "GUIDE_BOT",
                                    }
                                ],
                            }]
                    }
                }
            };

            //send a welcome message
            await sendTypingOn(sender_psid);
            await sendMessage(sender_psid, response_first);

            //send a image with button view main menu
            await sendTypingOn(sender_psid);
            await sendMessage(sender_psid, response_second);

            resolve("done!")
        } catch (e) {
            reject(e);
        }

    });
};

let sendMenuType = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
                            {
                                "title": "Danh mục bánh ngon",
                                "subtitle": "Bộ sưu tập bánh ngon bạn nên thử tại Savor Cakes",
                                "image_url": "https://www.savor.vn/static/f21768b583d99a0cde5995afeed98392/62c39/red-velvet.webp",
                                "buttons": [
                                    {
                                        "type": "postback",
                                        "title": "Menu Bánh sinh nhật",
                                        "payload": "MENU_CAKES",
                                    },
                                ],
                            },

                            {
                                "title": "Danh mục phụ kiện",
                                "subtitle": "Nến và Hoa",
                                "image_url": " https://target.scene7.com/is/image/Target/GUEST_9cc9cb14-649f-47ac-beef-3abf5c2772b0",
                                "buttons": [
                                    {
                                        "type": "postback",
                                        "title": "Menu phụ kiện",
                                        "payload": "MENU_ACCESSORIES",
                                    }
                                ],
                            },

                        ]
                    }
                }
            };
            await sendTypingOn(sender_psid);
            await sendMessage(sender_psid, response);
            resolve("done");
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
                console.log(res)
                console.log(body)
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
    sendMessage,
    sendMenuType
}