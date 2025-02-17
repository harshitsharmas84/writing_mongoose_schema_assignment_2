const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  CommentDate: {
    type: Date,
    default: Date.now,
  },
});

const blogPostSchema = new mongoose.schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  content: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 5000,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [commentSchema],
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
const Comment = mongoose.model("Comment", commentSchema);

module.exports = { BlogPost, Comment };
