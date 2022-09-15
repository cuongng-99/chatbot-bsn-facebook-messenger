import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
   router.get("/", homeController.getHomepage);

   router.post("/setup-profile", homeController.setUpUserFacebookProfile);

   router.post("/webhook", homeController.postWebhook);
   router.get("/webhook", homeController.getWebhook);

   router.get("/order-form", homeController.handleOrderForm)
   return app.use("/", router);
};

module.exports = initWebRoutes;