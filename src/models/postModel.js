const mongoose = require('mongoose') ;

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Post' , postSchema) ;