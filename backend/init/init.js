import 'dotenv/config';
import { products } from "./assets/assets.js";
import { v2 as cloudinary } from "cloudinary";
import connectCloudinary from "../config/cloudinary.js";
import connectDB from "../config/mongodb.js";
import productModel from "../models/productModel.js";

connectDB();
connectCloudinary();


const setProducts = async () => {
    try {
        await productModel.deleteMany({});
        for (const product of products) {
            const { name, description, price, category, subCategory, sizes, bestseller, image } = product;

            const imagesUrl = await Promise.all(
                image.map(item =>
                    cloudinary.uploader.upload(item.path, { resource_type: "image" })
                )
            );

            await new productModel({
                name,
                description,
                category,
                price: Number(price),
                subCategory,
                bestseller: bestseller === "true",
                sizes: sizes,
                image: imagesUrl.map(r => r.secure_url),
                date: Date.now()
            }).save();

            console.log("product added");
        }

    } catch (error) {
        console.log(error);
    }
}

setProducts();