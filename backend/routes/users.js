const router = require('express').Router();
let User = require('../models/users');
const bcrypt = require("bcrypt");

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:email').get((req, res) => {
    console.log(req.params.email)
    User.findOne({ email: req.params.email })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:email').put((req, res) => {
    console.log(req.params.email)
    User.findOneAndUpdate({ email: req.params.email }, req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
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

// signup route
router.post("/signup", async (req, res) => {
    const body = req.body;
    console.log(body)
    if (!(body.email && body.password)) {
        return res.status(400).send({ error: "Data not formatted properly" });
    }
    const posible_user = await User.findOne({  "$or": [{
            email: body.email
        }, {
            username: body.username
        }] });
    if (!(body.email && body.password)) {
        return res.status(400).send({ error: "Data not formatted properly" });
    }
    if (posible_user === null){
        // creating a new mongoose doc from user data
        const user = new User(body);
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        user.password = await bcrypt.hash(user.password, salt);
        user.save().then((doc) => res.status(201).json(doc));
    }
    else res.status(400).send({ error: "User with same email/username already exists." });


});

// login route
router.post("/login", async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(body.password, user.password);
        if (validPassword) {
            res.status(200).json(user);
        } else {
            res.status(400).json({ error: "Invalid Password" });
        }
    } else {
        res.status(401).json({ error: "User does not exist" });
    }
});

module.exports = router;
