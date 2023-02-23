import Post from "./mongodb_schemas/post.js";

class PostController {
  async create(req, res) {
    try {
      const post = await Post.create(req.body);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getById(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'Id не указан' })
      }
      const post = await Post.findById(id);
      console.log(post)
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message: 'Id не указан' });
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'Id не указан' })
      }
      const deletedPost = await Post.findByIdAndDelete(id);
      return res.json(deletedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController;
