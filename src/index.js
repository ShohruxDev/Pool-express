import { config } from "dotenv";
import express from "express";
import authRouter from "./controllers/authcontroller.js"
import userRouter from "./controllers/usercontroller.js"
config()
const app = express()
app.use(express.json())
app.use(authRouter)
app.use(userRouter)
app.listen(process.env.PORT, () => {
    console.log('Server is running...');
})