const express = require('express');
const { addComment } = require('../controllers/commentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:blogId', protect, addComment);

module.exports = router;
