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
    stepbyStep: {
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

  const Blog = module.exports = mongoose.model('Blog', BlogSchema)