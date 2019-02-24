const express = require('express');
const router = express.Router();

router.post('/signin', (req, res, next) => {
    const payload = req.body;
    const { username, password } = payload;
    console.log(`Username: ${username} and Password: ${password}`);
    res.status(500).json('NOT IMPLEMENTED');
});

module.exports = router;