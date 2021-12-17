const router = require('express').Router();
let User = require('../models/users');
let entrySchema = require('../models/entries');
const mongoose = require('mongoose')

const Entry = mongoose.model('Entry', entrySchema);

router.route('/:email').get((req, res) => {
    User.findOne( {email: req.params.email})
        .exec(
            function(err, users) {
                if (err) res.status(500).send(err);
                if (users != null) res.json(users.entries);
                else res.json('No users with email ' + req.params.email + ' found.')
            }
        );
})

router.route('/:email/add').post((req, res) => {
    User.findOne({ email: req.params.email })
        .then(users => {
            users.entries.push({
                    day: req.body.day,
                    weight: req.body.weight,
                    calories: req.body.calories
                })
            users.save()
                .then(() => res.json('Entry added to user.'))
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:email/update/:id').put((req, res) => {

    User.findOne({ 'entries._id': req.params.id })
        .then(users => {
                for (let i = 0; i < users.entries.length; i++){
                    if (users.entries[i]._id === req.params.id){
                        users.entries[i].day = req.body.day;
                        users.entries[i].weight = req.body.weight;
                        users.entries[i].calories = req.body.calories
                        console.log(users.entries[i])
                    }
                }
                users.save()
                    .then(() => res.json('Updated entry.'))
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:email/delete/:id').delete((req, res) => {

    User.findOne({ 'entries._id': req.params.id })
        .then(users => {
            for (let i = 0; i < users.entries.length; i++){
                if (users.entries[i]._id == req.params.id){
                  users.entries.splice(i,1)
                }
            }
            users.save()
                .then(() => res.json('Deleted entry.'))
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
