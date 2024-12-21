const express = require('express');
const router = express.Router();
const {getUsers, getUser, register, update ,deleteUser, login} = require('../Controllers/userController')

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/login', login)
router.post('/register', register)
router.put('/:id', update)
router.delete('/:id', deleteUser)

module.exports = router;

