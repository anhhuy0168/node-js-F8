import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage) // cai nay la chia trang / lay tu controller 
    router.get('/detail/user/:id', homeController.getDetailPage)//"id la tham so truyen vao"
    router.post('/create-user',homeController.createUser ) // dan huong trang toi homeController va ham createUser
    router.post('/delete-user', homeController.deleteUser)
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.updateUser);
    router.get('/about', (req, res) => { // cai nay la chia trang /
    res.send(`I'm Eric!`)
})
    return app.use('/', router)
}
module.exports = initWebRoute;