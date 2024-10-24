const Reservasi = require('../models/reservasiModels'); // Pastikan untuk menggunakan model yang benar

const createReservasi = async (req, res) => {
    try {
        const { checkin, checkout, guestName, email, phone, adult, children, address, paymentMethod } = req.body;

        const newReservasi = await Reservasi.create({
            checkin,
            checkout,
            guestName,
            email,
            phone,
            adult,
            children,
            address,
            paymentMethod,
            userId: user.id
        });

        res.status(201).json({ message: 'Reservation successfully created', data: newReservasi });
    } catch (error) {
        res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }
};


// Export fungsi createReservasi
module.exports = {createReservasi};
