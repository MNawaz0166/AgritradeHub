require("dotenv").config();
const express= require("express");
const app=express();
const router=require("./Router/reg-atuth");
const contactRouter=require("./Router/contact_route")
const listRouter=require("./Router/list_router")
const buyListRouter=require("./Router/buy_list_router")
const adminRouter=require("./Router/admin_router")
const connectDB=require("./Database/db");
const cors=require("cors")
const corsOptions={
   origin:"agritrade-hub-frontend6.vercel.app",
   methods:["POST","GET","PATCH","PUT","DELETE","HEAD"],
   credentials:true
}
const PORT=process.env.PORT ||8000;
app.use(cors(corsOptions))
app.use(express.json());
app.use("/api/auth",router)
app.use("/api/contactForm",contactRouter)
app.use("/api/listproduct",listRouter)
app.use("/api/buylist",buyListRouter)
app.use("/api/admin",adminRouter)
connectDB().then(()=>{
   app.listen(PORT,()=>{
      console.log("server is listining on port : ",PORT)
   })
})
