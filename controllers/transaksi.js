
const Transaksi = require('../models/transaksiModels');

const createTransaksi = async (req, res) => {
  try {
    const { namaPelanggan, itemPerkg, pricePerkg, totalHarga } = req.body;
    const transaksi = await Transaksi.create({
      namaPelanggan,
      itemPerkg,
      pricePerkg,
      totalHarga,
    });
    res.json({ message: 'Transaksi berhasil dibuat', transaksi });
  } catch (error) {
    res.status(400).json({ message: 'Gagal membuat transaksi', error });
  }
};

const getTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll();
    res.json({ message: 'Transaksi berhasil diambil', transaksi });
  } catch (error) {
    res.status(400).json({ message: 'Gagal mengambil transaksi', error });
  }
};



module.exports = { createTransaksi, getTransaksi};