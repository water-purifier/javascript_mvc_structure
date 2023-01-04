const db = require('../models');
const Post = db.Post;
const Op = db.Sequelize.Op;

exports.findALl = async (req, res) => {
    const posts = await Post.findAll();
    // res.send('post Page');
    res.status(200).json(posts);
};

exports.findOne = async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    res.status(200).json(post);
};
