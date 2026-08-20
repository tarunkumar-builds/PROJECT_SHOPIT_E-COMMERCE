import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();

connectDB().catch((error) => {
    console.error("DB connection failed:", error.message);
});
connectCloudinary();

app.use(express.json());

const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.ADMIN_FRONTEND_URL,
    ...(process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(",") : []),
    process.env.NODE_ENV !== "production" ? "http://localhost:5173" : "",
    process.env.NODE_ENV !== "production" ? "http://localhost:5174" : "",
].filter(Boolean).map((origin) => origin.trim());

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error("Not allowed by CORS"));
    },
}));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API WORKING");
});

app.use((error, req, res, _next) => {
    console.error(error);
    res.status(500).json({success:false, message:error.message || "Internal Server Error"});
});

export default app;
