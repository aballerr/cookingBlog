const mongoose = require('mongoose')


const BlogSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,

    },
    yield: {
        type: String,

    },
    time: {
        type: Number,

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

const Blog = mongoose.model('Blog', BlogSchema)


function getNextId() {



}

function _addBlogPost(blog, callback) {

    Blog.collection.stats(function(err, results) {
        let id = results.count + 1;

        let b = new Blog({
            id: id,
            title: blog.title
        });

        b.save(callback);
    })
}

function _queryAll(callback){
    Blog.find({}, callback);
}

function _deleteAll(callback) {
    Blog.remove({}, callback);
}

module.exports = {
    Blog: mongoose.model('Blog', BlogSchema),
    addBlogPost: _addBlogPost,
    queryAll: _queryAll,
    deleteAll: _deleteAll
}