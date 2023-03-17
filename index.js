import express from 'express'
import db from './config/database.js'
const app = express();


try {
    await db.authenticate()
    console.log("Database connected...")
} catch (error) {
    console.log("Failed connect to database")
}


app.use(express.json());
app.listen(5000, () => console.log('Server Running at port 5000'));
