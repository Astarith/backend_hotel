const Transaksi = require('../models/transaksiModels');
const Harga = require('../models/hargaModels');

const createTransaksi = async (req, res) => {
  try {
    const { namaPelanggan, hargaId, jumlah, Layanan } = req.body;
    const transaksi = await Transaksi.create({
      namaPelanggan,
      Layanan,
      jumlah,
      hargaId,
    });
    
    return res.status(201).json({ message: 'Transaksi berhasil dibuat', data: transaksi });
  } catch (error) {
    return res.status(500).json({ message: 'Error', error: error.message });
  }
};

const getRiwayatTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll({
      include: [
        {
          model: Harga,
          as: 'harga'
        }
      ]
    });
    return res.status(200).json({ message: 'Riwayat transaksi', data: transaksi });
  } catch (error) {
    return res.status(500).json({ message: 'Error', error: error.message });
  }
};

module.exports = { createTransaksi, getRiwayatTransaksi };