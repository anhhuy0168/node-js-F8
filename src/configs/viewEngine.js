import express from "express";

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set("view engine", "ejs"); // cau hinh la ejs
    app.set("views", "./src/views") // cau hinh duong dan ejs phải viết trong thư mục src/views
}

export default configViewEngine;
