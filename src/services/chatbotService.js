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

let sendMenuGroupCake = (sender_psid) => {
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
                                        "title": "Bánh vị Đặc biệt",
                                        "payload": "SPECILA_TASTE",
                                    },
                                    {
                                        "type": "postback",
                                        "title": "Bánh kem Dâu tây",
                                        "payload": "STRAWBERY_TASTE",
                                    },
                                    {
                                        "type": "postback",
                                        "title": "Bánh Hè",
                                        "payload": "SUMMER_CAKE",
                                    }
                                ],
                            },

                            {
                                "title": "Hours",
                                "subtitle": "MON-FRI 10AM - 11PM  | SAT 5PM - 10PM | SUN 5PM - 9PM",
                                "image_url": " https://bit.ly/imageOpening",
                                "buttons": [
                                    {
                                        "type": "postback",
                                        "title": "RESERVE A TABLE",
                                        "payload": "RESERVE_TABLE",
                                    }
                                ],
                            },

                            {
                                "title": "Banquet Rooms",
                                "subtitle": "Restaurant accommodates up to 300 seated guests and similar at cocktail receptions",
                                "image_url": " https://bit.ly/imageShowRooms",
                                "buttons": [
                                    {
                                        "type": "postback",
                                        "title": "SHOW ROOMS",
                                        "payload": "SHOW_ROOMS",
                                    }
                                ],
                            }


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
    sendMenuGroupCake
}