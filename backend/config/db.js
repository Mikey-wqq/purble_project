import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://Mikey:zosima08@cluster0.5chal.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


