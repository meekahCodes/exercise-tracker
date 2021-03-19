const router = require('express').Router();
const exercise = require('../models/exercise.modal.js');
const Exercise = require('../models/exercise.modal.js');

router.route('/').get((req,res) => {
    Exercise.find()
            .then((exercises) => {
                res.json(exercises)
            })
            .catch((err)  => {
                res.status(400).json(`Err: ${err}`);
            })
});

router.route('/').post((req,res) => {
    const newExercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date),
    });

    newExercise.save()
               .then(() => {
                    res.json('Exercise Added');
               })
               .catch((err) => {
                   res.status(400).json(`Err: ${err}`);
               })
})

router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
            .then((exercise) => {
                res.json(exercise);
            })
            .catch((err) => {
                res.status(400).json(`Err: ${err}`)
            });
})

router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
            .then((response) => {
                res.json('Excercise Deleted!');
            })
            .catch((err) => {
                res.status(400).json(`Err: ${err}`)
            });
})

router.route('/:id').post((req,res) => {
    Exercise.findById(req.params.id)
            .then((exercise) => {
                exercise.username = req.body.username;
                exercise.description = req.body.description;
                exercise.duration =  Number(req.body.duration);
                exercise.date = Date.parse(req.body.date);

                exercise.save()
                        .then(() => {
                            res.json('Excercise Updated')
                        })
                        .catch((err) => {
                            res.status(400).json(`Err: ${err}`)
                        });

            })
            .catch((err) => {
                res.status(400).json(`Err: ${err}`)
            });
})

module.exports = router;