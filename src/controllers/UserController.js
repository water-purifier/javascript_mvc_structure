const User = require('../models/User');

const getAll = (req,res)=>{
    res.send('users Page');
}

const getOne = (req,res)=>{
    res.send(`user Page Id : ${req.params.id}`);
}

module.exports = {
    getAll,
    getOne,
}