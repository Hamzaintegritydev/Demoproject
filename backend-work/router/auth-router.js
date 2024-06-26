const express = require('express');
const authcontroller = require('../controller/auth-controller');
const router = express.Router();
const { forgotPassword, resetPassword } = require('../controller/auth-controller');

// Sign up a user
router.post('/signup', authcontroller.signup);
// Login a user
router.post('/login', authcontroller.login);

router.get('/allUsers', authcontroller.getAllUsers);


router.post('/forgot-password', forgotPassword);

// Route for resetting password
router.post('/reset-password', resetPassword);


module.exports = router;