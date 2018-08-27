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





describe('add data', function () {
  before(function() {
    blog.deleteAll((err, success) => {
   
      it('should delete all currently existing files', function(done) {
        console.log('does this even run')
        expect(success).to.exist;
  
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
  
     
      done();
    })
  });

  it('should have a user with id 1', function(done) {
    blog.queryById(1, (err, success) => {
      if (err) {
        
        done(err)
      }
      else {
       
        done();
      }
    })
  });
});


describe('blog posts should have ascending ids', function() {
  it('should have descending ids', function() {
    
  })
});

