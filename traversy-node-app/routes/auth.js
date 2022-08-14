const express = require('express')
const passport = require('passport')
const router = express.Router()

//Authenticate with google
//GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))

//google auth callback
//GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
    res.redirect('/dashboard')
})

//logout user
//GET /auth/logout
router.get('/logout',(req,res) => {
    req.logout((err) => {
        if(err) return next(err)
    })
    res.redirect('/')
})

module.exports = router