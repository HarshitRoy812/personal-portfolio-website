const express = require('express');

const getComments = async (req,res) => {
    res.send("Hello");
}

module.exports = {getComments};