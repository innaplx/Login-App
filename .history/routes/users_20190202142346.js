const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req, res) => res.render('login'));

//register page
router.get('/register', (req, res) => res.render('register'));

//register handel
router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('helo');
});

module.exports = router;