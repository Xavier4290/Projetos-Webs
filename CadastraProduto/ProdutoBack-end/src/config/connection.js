import 'dotenv/config'
import mysql from 'mysql2'

const conectaDB = () => {
    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    })

    return connection

}


export default conectaDB;