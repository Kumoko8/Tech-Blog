const { Post } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage', { 
    layout: "main"
  });
});

router.get ('/dashboard', async (req, res) => {
  try {
   const postData = await Post.findAll()
   const posts = postData.map((post) => post.get({ plain: true }));
   res.render('dashboard', {
    layout: 'main',
    posts
   });
  } catch (error) {
    
  }
  
})

router.get ('/login', async (req, res) => {
  res.render('login');
})

router.get ('/signup', async (req, res) => {
  res.render('signup');
})
module.exports = router;