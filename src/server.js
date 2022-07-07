import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initApiRoute from './route/api';
// import connection from './configs/connectDB';
require('dotenv').config()
const app = express();
const port = process.env.PORT; //PORT NAY O BEN ENV

app.use(express.urlencoded({ extended: true })); // gui data len server va lay data ve
app.use(express.json()) // gui data len server va lay data ve

configViewEngine(app); // app nay o view engine
//init webroute
initWebRoute(app); // lay tu web o router
//init api
initApiRoute(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

