const express = require('express');
const router = express.Router();

const exercisesControllers = require('../Controllers/ExercisesControllers');

router.post('/add-exercise',exercisesControllers.postExercise);
router.get('/get-exercises',exercisesControllers.getExercises);
router.get('/get-exercise/:id',exercisesControllers.getExerciseById);
router.delete('/delete-exercise/:id',exercisesControllers.deleteExercises);
router.patch('/update-exercise/:id',exercisesControllers.updateExercise);

module.exports = router;