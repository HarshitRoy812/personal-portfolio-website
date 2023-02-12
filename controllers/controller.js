const Comments = require('../models/comments');
const path = require('path');

const getComments = async (req,res) => {
    
    const comments = await Comments.find({});

    res.status(200).json({msg : comments});

}


const postComments = async (req,res) => {
   
    const comments = await Comments.create(req.body);

    res.status(201).json({msg : comments});
}


const getResume = async (req,res) => {
    const filePath = path.join(__dirname,'..','resume.docx');
    res.download(filePath);
    
}

module.exports = {
    getComments,
    postComments,
    getResume
};