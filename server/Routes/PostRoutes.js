import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/model/PostModel.js';
dotenv.config();
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get posts from database and show in post section

router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

//upload image to cloudinary and upload post to the database when get api call from front-end

router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, image } = req.body;
    const imageUrl = await cloudinary.uploader.upload(image);
    const newPost = await Post.create({
      name,
      prompt,
      image: imageUrl.url,
    });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
