import express from 'express';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

//route for Creating image according to prompt given from client side

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({image});
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response.data.error.message);
  }
});

export default router;
