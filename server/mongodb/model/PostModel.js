import mongoose from 'mongoose';

const Post = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const postSchema = mongoose.model('Post', Post);
export default postSchema;
