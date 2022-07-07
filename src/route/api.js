import express from "express";
import apiController from '../controller/apiController'
let router = express.Router();
const initApiRoute = (app) => {
 // cai nay la chia trang / lay tu controller 
    router.get('/user',apiController.getAllUser)
    router.post('/create-user',apiController.createNewUser)
    router.put('/update-user', apiController.updateUser); //method PUT -> UPDATE data
    router.delete('/delete-user/:id', apiController.deleteUser); //method DELETE -> DELETE da
    return app.use('/api/v1/', router)
}

module.exports = initApiRoute;