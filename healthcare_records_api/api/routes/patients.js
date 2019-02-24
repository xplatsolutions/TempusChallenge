const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(500).json('NOT IMPLEMENTED ALL PATIENTS');
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(500).json(`NOT IMPLEMENTED - Patient Id: ${id}`);
});

module.exports = router;