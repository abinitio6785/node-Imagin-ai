import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import PostRoutes from './Routes/PostRoutes.js';
import DallyRoutes from './Routes/DallyRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/posts', PostRoutes);
app.use('/api/v1/dalle', DallyRoutes);

// To check server working properly

app.get('/', (req, res) => {
  res.send('welcome to AI');
});

const port = process.env.PORT || 3000;
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(
        `server running successfully on port: ${port} `
      );
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
