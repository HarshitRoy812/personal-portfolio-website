const router = require('express').Router();
const {
    getComments,
    postComments,
    getResume
} = require('../controllers/controller');

router.route('/comments').get(getComments).post(postComments);
router.route('/resume').get(getResume);


module.exports = router;