const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/blogs',{ useNewUrlParser: true,  useUnifiedTopology: true });


router.get('/', (req, res) => {
    Blog
        .find()
        .then(blogs => {
            res.status(200).json(blogs);
        });
});
// fix where route
router.get('/featured', (req, res) => {
    Blog
    .where({featured: true})
    .then(blogs => res.status(200).json(blogs))
    .catch(err => res.status(500).send(err))
});

router.get('/:id', (req, res) => {
    Blogs
        .findById(req.params.id)
        .then(blogs => {
            res.status(200).json(blogs);
        });
});
    
router.post('/', (req, res) => {
    const newBlog = new Blog({
        title: req.body.title,
        article: req.body.article,
        published: req.body.published,
        featured: req.body.featured,
        author: req.body.author
    });
    newBlog.save()
    .then(blogs => {
        res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

router.put('/:id', (req, res) => {
Blog
    .findByIdAndUpdate(req.params.id,
    {
        title: req.body.title,
        article: req.body.article,
        published: req.body.published,
        featured: req.body.featured,
        author: req.body.author
    })
    .then(blogs => {
    res.status(204).json(blogs);
    });
});

router.delete('/:id', (req, res) => {
    Blogs
        .findByIdAndRemove(req.params.id)
        .then(blogs => {
            if (blogs) {
                res.status(200).json(blogs);
            } else {
                res.status(500)
            }
        });
});

module.exports = router;
