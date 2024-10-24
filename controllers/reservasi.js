const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');

// Tambah Reservasi Baru
router.post('/reservations', async (req, res) => {
    try {
        const { roomType, roomNumber, guestName, email, phoneNumber, adults, children, address, paymentMethod } = req.body;

        const newReservation = await Reservation.create({
            roomType,
            roomNumber,
            guestName,
            email,
            phoneNumber,
            adults,
            children,
            address,
            paymentMethod
        });

        res.status(201).json({ message: 'Reservation successfully created', data: newReservation });
    } catch (error) {
        res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }
});

module.exports = router;
