const Transaksi = require('../models/transaksiModels');
const Harga = require('../models/hargaModels');

const createTransaksi = async (req, res) => {
  try {
    const { namaPelanggan, hargaId, jumlah, jenislayanan, jenislaundry, jumlahUangPelanggan } = req.body;
    const transaksi = await Transaksi.create({
      namaPelanggan,
      jenislayanan,
      jenislaundry,
      jumlah,
      jumlahUangPelanggan,
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
const deleteTransaksi = async (req, res) => { 
  try {
    const { id } = req.params;
    const transaksiDelete = await Transaksi.destroy({ where: { id } });
    return res.status(200).json({ message: 'Transaksi berhasil dihapus', data: transaksiDelete });
  } catch (error) {
    return res.status(500).json({ message: 'Error', error: error.message });
  }
};

module.exports = { createTransaksi, getRiwayatTransaksi, deleteTransaksi };