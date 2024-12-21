const express = require('express');
const router = express.Router();

router.get('/')
router.get('/:id')
router.post('/createOrder')
router.put('/:id')
router.delete('/:id')

module.exports = router;
