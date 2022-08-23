import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
   router.get("/", homeController.getHomepage);

   router.post("/webhook", homeController.postWebhook);
   router.get("/messaging-webhook", homeController.getWebhook);
   return app.use("/", router);
};

module.exports = initWebRoutes;