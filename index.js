import express from "express";
import mongoose from "mongoose";
import router from "./router.js"

const PORT = 5000;
const DB_URL = 'mongodb+srv://admin:admin@cluster0.ztnjdkp.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use('/api', router);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL); 
    app.listen(PORT, () => {
      console.log(`SERVER STARTED AT PORT ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

startApp();
