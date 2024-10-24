const express = require('express');
const router = express.Router();
const Reservasi = require('../models/reservasiModels'); // Pastikan untuk menggunakan model yang benar

// Tambah Reservasi Baru
router.post('/reservasi', async (req, res) => {
    try {
        const { checkin, checkout, guestName, email, phone, adult, children, address, paymentMethod } = req.body;

        const newReservasi = await Reservasi.create({
            checkin : checkin,
            checkout : checkout,
            guestName : guestName,
            email : email,
            phone : phone,
            adult : adult,
            children : children,
            address : address,
            paymentMethod: paymentMethod
        });

        res.status(201).json({ message: 'Reservation successfully created', data: newReservasi });
    } catch (error) {
        res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }
});

module.exports = router;
