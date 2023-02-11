const router = require('express').Router();
const {getComments} = require('../controllers/controller');

router.route('/comments').get(getComments);


module.exports = router;