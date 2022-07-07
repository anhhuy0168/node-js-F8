import mysql from 'mysql2/promise';// cho thang mysql biet minh su dung promise

// create the connection to database
const pool = mysql.createPool({ // lien quan den hieu nang
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});


export default pool; 