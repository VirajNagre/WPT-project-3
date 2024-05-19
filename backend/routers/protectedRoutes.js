const express = require('express');
const verifyToken = require('./middleware/authMiddleware');
const router = express.Router();

router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', userId: req.userId });
});

module.exports = router;