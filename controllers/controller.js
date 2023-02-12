const Comments = require('../models/comments');

const getComments = async (req,res) => {
    
    const comments = await Comments.find({});

    res.status(200).json({msg : comments});

}


const postComments = async (req,res) => {
   
    const comments = await Comments.create(req.body);

    res.status(201).json({msg : comments});
}

module.exports = {
    getComments,
    postComments
};