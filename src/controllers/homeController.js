require('dotenv').config();

let getHomepage = (req, res) => {
   return res.render("homePage.ejs")
};

let postWebhook = (req, res) => {
   let body = req.body;

   // Send a 200 OK response if this is a page webhook

   if (body.object === "page") {
      // Returns a '200 OK' response to all requests
      res.status(200).send("EVENT_RECEIVED");

   } else {
      console.log("Error occur!")
      // Return a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
   }
}

let getWebhook = (req, res) => {

   let verifyToken = process.env.VERIFY_TOKEN;

   let mode = req.query["hub.mode"];
   let token = req.query["hub.verify_token"];
   let challenge = req.query["hub.challenge"];

   // Check if a token and mode is in the query string of the request
   if (mode && token) {
      // Check the mode and token sent is correct
      if (mode === "subscribe" && token === verifyToken) {
         // Respond with the challenge token from the request
         console.log("WEBHOOK_VERIFIED");
         res.status(200).send(challenge);
      } else {
         // Respond with '403 Forbidden' if verify tokens do not match
         res.sendStatus(403);
      }
   }
}
module.exports = {
   getHomepage: getHomepage,
   postWebhook: postWebhook,
   getWebhook: getWebhook
}