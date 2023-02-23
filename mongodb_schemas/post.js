import mongoose from "mongoose";

const post = new mongoose.Schema({
  id: String,
  username: String
});

const Post = mongoose.model('Post', post);
export default Post;
