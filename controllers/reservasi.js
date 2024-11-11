const { where } = require('sequelize');
const chekOutIn = require('../models/checkInOut');
const Reservasi = require('../models/reservasiModels');
const Room = require('../models/roomModels');
const moment  = require('moment')

const createReservasi = async (req, res) => {
  try {
    const {
        guestName,
        email,
        phone,
        adult,
        children,
        remarks,
        checkin,
        checkout,
        nationality,
        roomId,
    } = req.body;
    const id = req.user.id;
    // Validasi input
    const validAdult = ['1', '2', '3', '4'];
    const validChildren = ['0', '1', '2', '3', '4'];

    if (!validAdult.includes(adult)) {
      return res.status(400).json({ message: 'Invalid adult value' });
    }

    if (!validChildren.includes(children)) {
      return res.status(400).json({ message: 'Invalid children value' });
    }

    const room = await Room.findByPk(roomId);
    const noRoom = room.no_room;
    const inBaru = moment(checkin).format('YYYY-MM-DD')
    const outBaru = moment(checkout).format('YYYY-MM-DD')
    // Membuat reservasi baru
    const reservasi = await Reservasi.create({
      userId : id,     
      guestName,
      email,
      phone,
      adult,
      children,
      remarks,
      checkin : inBaru,
      checkout : outBaru,
      nationality,
      roomId,
      roomNo : noRoom,
      room_status : 'booked'
    });

    res.status(201).json({ message: 'Reservasi created successfully', data: reservasi });
  } catch (error) {
    console.error('Error creating reservasi:', error); // Log detail error
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const checkin = async (req, res) => {
    const { 
        id_reservasi,
        purposeOfVisit,
        wakeUpCall,
        checkin,
        checkout,
        remarks,
        nationality,
    } = req.body;
    try {
        const reservasi = await Reservasi.findByPk(id_reservasi);
        if(!reservasi){
            return res.status(404).json({message : 'reservasi tidak ditemukan'})
        }

        const checkIn = await chekOutIn.create({
            id_reservasi,
            purposeOfVisit,
            wakeUpCall,
            checkin,
            checkout,
            remarks,
            nationality,
            room_status : 'checkin'
        })
        res.status(200).json(checkIn)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const checkout = async (req, res) => {
    const validPaymentmethod = ['debit', 'cash'];
    const validPaymentstatus = ['done', 'pending',];
    const { 
        paymentMethod,
        paymentStatus,
        otherCharge,
        nominal,
    } = req.body;
    const id = req.params.id;
    try {
        if (!validPaymentmethod.includes(paymentMethod)) {
            return res.status(400).json({ message: 'Invalid Payment Method' });
        }
        if (!validPaymentstatus.includes(paymentStatus)) {
          return res.status(400).json({ message: 'Invalid Payment Status' });
        }

        const checkin = await chekOutIn.findByPk(id);
        if(!checkin){
            return res.status(404).json({message : 'data checkin tidak ditemukan'})
        }

        await chekOutIn.update({
            paymentMethod,
            paymentStatus,
            otherCharge,
            nominal,
            room_status : 'checkout'
        },{
            where : {
                id : id
            }
        })

        const reservasiID = checkin.id_reservasi;
        const reservasi = await Reservasi.findByPk(reservasiID)
        if (!reservasi) {
            return res.status(440).json({message : 'reservasi tidak ditemukan'})
        }

        await Reservasi.update({
            status_room : 'available',
        },{
            where : {id : reservasi}
        })

        const checkinUpdate = await chekOutIn.findByPk(id);
        if(!checkin){
            return res.status(404).json({message : 'data checkin tidak ditemukan'})
        }

        res.status(200).json(checkinUpdate)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const riwayatTransaksi = async (req, res) => {
    try {
        const riwayat = await Reservasi.findAll({
            include : [{
                model : chekOutIn
            }]
        })
        res.status(200).json(riwayat)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
module.exports = {
  createReservasi,
  checkin,
  checkout,
  riwayatTransaksi
};
