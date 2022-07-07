import pool from '../configs/connectDB';

    
//  connection.query(
//      'SELECT * FROM `user` ',// truyen vao query
//     function (err, results, fields) { // callback funtion
//         results.map((row) => {  data.push({ // truyen thong tin vo bien data da khai bao o tren
//                     id: row.id,
//                     email: row.email,
//                     address: row.address,
//                     firstName: row.firstName,
//                     lastName: row.lastName
//         })
//         }); // gan du lieu DB vao data
//          return res.render('index.ejs', { dataUser: data }) // lay trang index, xuat ra json qua dataUser
//      }  // render ra file index.ejs , tham so thu 2 la data key va value , key la dataUser , data la bien khai bao o tren
//  );
    
  let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');// gan du lieu vao row

    return res.render('index.ejs', { dataUser: rows, test: 'abc string test' })// lay trang index, xuat ra json qua dataUser
}
    


// let getDetailPage = async (req, res) => {
//     let userId = req.params.id; // .id la o tren duong dan co id
//     // userid la id ttrong database
//     let [user] = await pool.execute(`select * form user where id = ?`, [userId])
//     console.log("check data" , user)
//     return res.send(JSON.stringify(user))
// }
let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from user where id = ?`, [userId]); // dung dau cham hoi la gia tri dong 
    return res.send(JSON.stringify(user))
}

//create user
let createUser = async (req,res)=>{
    // console.log("request" , req.body) // tra ra 1 mang
    let { firstName, lastName, email, address } = req.body;
    // let firstName = this.req.body.firstName
    // let lastName = this.req.body.lastName
    // let email = this.req.body.email
    // let address = this.req.body.address
    // poll ben data , poll la bang data
    await pool.execute('insert into user(firstName , lastName , email,address) values(?,?,?,?)',[firstName,lastName,email,address])// dung dau cham hoi la gia tri dong 
    return res.redirect('/')
}
let deleteUser = async (req, res) => {
    let userId = req.body.userID; // userID nay o ben trang index
    await pool.execute('delete from user where id = ?', [userId])
    return res.redirect('/');
}
let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('Select * from user where id = ?', [id]);
    return res.render('update.ejs', { dataUser: user[0] }); // x <- y
    // dataUser de truyen qua view
}
let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;

    await pool.execute('update user set firstName= ?, lastName = ? , email = ? , address= ? where id = ?',
        [firstName, lastName, email, address, id]);

    return res.redirect('/');
}
module.exports = {
    getHomePage,getDetailPage,createUser,deleteUser,getEditPage,updateUser
}