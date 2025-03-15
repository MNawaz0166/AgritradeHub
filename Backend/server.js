require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./Router/reg-atuth");
const contactRouter = require("./Router/contact_route.js");
const listRouter = require("./Router/list_router");
const buyListRouter = require("./Router/buy_list_router");
const adminRouter = require("./Router/admin_router");
const connectDB = require("./Database/db");
const cors = require("cors");

// CORS Configuration
const corsOptions = {
   origin: "https://agritrade-hub-frontend6.vercel.app",
   methods: ["POST", "GET", "PATCH", "PUT", "DELETE", "HEAD"],
   credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/auth", router);
app.use("/api/contactForm", contactRouter);
app.use("/api/listproduct", listRouter);
app.use("/api/buylist", buyListRouter);
app.use("/api/admin", adminRouter);

// Connect to database
connectDB().then(() => {
   console.log("✅ Database connected successfully.");
});

// ✅ Export for Vercel (serverless function)
module.exports = app;

