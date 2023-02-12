const router = require('express').Router();
const {getComments,postComments} = require('../controllers/controller');

router.route('/comments').get(getComments).post(postComments);


module.exports = router;