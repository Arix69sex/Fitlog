const router = require('express').Router();
let User = require('../models/users');

router.route('/:username').get((req, res) => {
    User.findOne({'username': req.user.username})
        .populate('users')
        .exec(
            function(err, company) {
                if (err) res.status(500).send(err);

                res.json(company.users);
            }
        );
})

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({email, username, password});

    newUser.save()
        .then(() => res.json('User added.'))
        .catch(err => res.status(400).json('Error: ' + err));

})

module.exports = router;
