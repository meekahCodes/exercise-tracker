const router = require('express').Router();
const User = require('../models/user.model.js');

router.route('/').get((req,res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            res.status(400).json(`Error: ${err}`)
        })
})

router.route('/').post((req,res) => {
    const newUser = new User({
        username : req.body.username
    });

    newUser.save()
           .then((response) => {
                res.json('User Added')
           })
           .catch((err) => {
                res.status(400).json(`Error: ${err}`)
           })

})

module.exports = router;