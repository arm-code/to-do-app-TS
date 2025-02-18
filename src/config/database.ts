import mysql2 from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

export const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,    
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((error) => {
    if(error){
        console.log('Error al conectarse con la DB', error)
    }else{
        console.log('Database online...')
    }
})
