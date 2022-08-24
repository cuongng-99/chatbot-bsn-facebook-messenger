import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine";
import webRoutes from "./routes/web";
require("dotenv").config

let app = express();

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config view engine
viewEngine(app);

// config web routes
webRoutes(app);

let port = process.env.PORT || 1512

app.listen(port, () => {
   console.log(`App is running at port: http://localhost:${port}`);
})