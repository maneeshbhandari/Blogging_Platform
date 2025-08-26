const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      text: req.body.text,
      blog: req.params.blogId,
      author: req.user.id
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
