const mongoose = require('mongoose')


const BlogSchema = mongoose.Schema({
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    ingredients: {
        type: Array,
        default: []
    },
    stepByStep: {
        type: Array,
        default: []
    },
    generalPost: {
        type: Array,
        default: []
    },
    images: {
        type: Array,
        default: [],
        primaryImage: {
            type: String
        }
    },
    created: { 
        type: Date,
        default: Date.now
    }
  })

//   const Blog = module.exports = mongoose.model('Blog', BlogSchema)


  module.exports = {
      Blog: mongoose.model('Blog', BlogSchema),

      addBlogPost: function(blog, callback) {
        let b = new this.Blog({
            id: blog.id,
            title: blog.title
          });
        
        blog.save(callback);
      }
  }