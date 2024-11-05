const Transaksi = require('../models/transaksiModels');
const Harga = require('../models/hargaModels');

const createTransaksi = async (req, res) => {
  try {
    const { namaPelanggan, hargaId, jumlah, jenislayanan, jenislaundry } = req.body;

    const harga = await Harga.findByPk(hargaId); 

    if (!harga) {
      return res.status(404).json({ message: 'Harga tidak ditemukan' });
    }
    const totalHarga = harga.harga * jumlah;
    const transaksi = await Transaksi.create({
      namaPelanggan,
      jenislayanan,
      jenislaundry,
      jumlah,
      hargaId, 
      totalHarga 
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

const updateStatusTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['menunggu', 'selesai', 'dibatalkan'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Status tidak valid' });
    }

    const [updated] = await Transaksi.update({ status }, { where: { id } });

    if (updated === 0) {
      return res.status(404).json({ message: 'Transaksi tidak ditemukan' });
    }

    return res.status(200).json({ message: 'Status transaksi berhasil diperbarui' });
  } catch (error) {
    return res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui status', error: error.message });
  }
};

module.exports = { createTransaksi, getRiwayatTransaksi, updateStatusTransaksi };