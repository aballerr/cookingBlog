//This file will be used for testing
const blog = require('../models/blog');
const expect = require('chai').expect
const assert = require('chai').assert


const mongoose = require('mongoose');
const databaseConfig = require('../config/database').database

//Connection to MongoDB
mongoose.connect(databaseConfig, { useNewUrlParser: true })
let db = mongoose.connection
db.on('error', console.error.bind(console, 'mongodb connection error'))







describe('this should fail', function() {
  assert.equal('1', '1', 'they equal eachother!');
})

describe('add data', function () {
  before(function() {
    blog.deleteAll((err, success) => {
   
      it('should delete all currently existing files', function(done) {
        expect(success).to.exist;
        done();
      });
      }
    );
  })

  it('should add something to the database', function(done) {

    let blogJson = {
      title: "hello world"
    }

  
    blog.addBlogPost(blogJson, (err, blogPost) => {

      
      if (err) {
        done(err);
      }

      expect(blogPost.id).to.exist;
      assert.equal(blogPost.id, '1', 'id should be equal to 1');
  
      mongoose.connection.close()
      done();
    })
  })
});


describe('blog posts should have ascending ids', function() {
  it('should have descending ids', function(done) {
    
  })
});

