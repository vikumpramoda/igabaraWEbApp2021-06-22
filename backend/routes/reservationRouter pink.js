const express = require('express');

const router = express.Router();

const reservationController = require('../controllers/reservationController pink');
const middlewares = require('../middlewares pink');

//get all appointments
router.get('/', reservationController.findAllReservations);

//add appointment
router.post('/', middlewares.validateInput, middlewares.validateSlot, reservationController.addReservation);

//update appointment
router.put('/:id', middlewares.validateInput, middlewares.validateSlot, reservationController.editReservation);

//delete appointment
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;