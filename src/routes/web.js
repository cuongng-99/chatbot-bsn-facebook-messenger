import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
   router.get("/", homeController.getHomepage);

   router.post("/setup-profile", homeController.setUpUserFacebookProfile);

   router.post("/webhook", homeController.postWebhook);
   router.get("/webhook", homeController.getWebhook);

   router.get("/order-form/:sender_psid", homeController.handleOrderForm)
   router.post("/post-order-form", homeController.handlePostOrderForm)

   return app.use("/", router);
};

module.exports = initWebRoutes;