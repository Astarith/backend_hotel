
const Reservasi = require('../models/user/reservasiModels'); 
const User = require('../models/user/userModels');

const validPayment = ['transfer', 'cash'];

const createReservasi = async (req, res) => {
    const { guestName, email, phone, adult, children, address, paymentMethod, price, remarks, userId } = req.body;
    if (!validPayment.includes(paymentMethod)) {
        return res.status(400).json({ message: 'Invalid payment' });
    }
    try {
        await Reservasi.create({
            guestName: guestName,
            email: email,
            phone: phone,
            adult: adult,
            children: children,
            address: address,
            paymentMethod: paymentMethod,
            price: price,
            remarks: remarks,
            userId: userId
        });
        res.status(201).json({ message: 'Reservation successfully created' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating reservation', error: error.message });
  }
};

const getReservasi = async (req, res) => {
    try {
        const reservasi = await Reservasi.findAll();
       return res.status(200).json({ message: 'Riwayat Reservasi', data: reservasi });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
};


module.exports = {createReservasi, getReservasi};
