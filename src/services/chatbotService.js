import request from "request";
require("dotenv").config()


const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN


// Get user's profile
let getUserProfile = async (sender_psid) => {
   await request({
      "uri": `https://graph.facebook.com/${sender_psid}>?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`,
      "qs": { "access_token": PAGE_ACCESS_TOKEN },
      "method": "GET",
   }, (err, res, body) => {
      if (!err) {
         console.log('get user profile success')
         body = JSON.parse(body);
         let userName = `${body.gendder} ${body.firstName} ${body.lastName}`;
         resolve(userName);
      } else {
         console.error("Unable to send message:" + err);
      }
   });
   return userName
}

let sendResponseWelcomeNewCustomer = (username, sender_psid) => {
   return new Promise(async (resolve, reject) => {
       try {
           let response_first = { "text": `Welcome ${username} to HaryPhamDev's Restaurant` };
           let response_second = {
               "attachment": {
                   "type": "template",
                   "payload": {
                       "template_type": "generic",
                       "elements": [
                           {
                               "title": "HaryPhamDev 's restaurant",
                               "subtitle": "My restaurant is legendary, its classic wine collection equally so.",
                               "image_url": "https://bit.ly/imageToSend",
                               "buttons": [
                                   {
                                       "type": "postback",
                                       "title": "SHOW MAIN MENU",
                                       "payload": "MAIN_MENU",
                                   },
                                   {
                                       "type": "postback",
                                       "title": "RESERVE A TABLE",
                                       "payload": "RESERVE_TABLE",
                                   },
                                   {
                                       "type": "postback",
                                       "title": "GUIDE TO USE THIS BOT",
                                       "payload": "GUIDE_BOT",
                                   }
                               ],
                           } ]
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
   return new Promise ((resolve, reject) => {
      try{
          let request_body = {
              "recipient": {
                  "id": sender_psid
              },
              "sender_action":"typing_on"
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
   sendMessage
}