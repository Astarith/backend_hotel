
const Transaksi = require('../models/transaksiModels');

const createTransaksi = async (req, res) => {
  try {
    const { namaPelanggan, itemPerkg, pricePerkg } = req.body;
    const transaksi = await Transaksi.create({
      namaPelanggan,
      itemPerkg,
      pricePerkg
    });
    transaksi.totalHarga = parseInt(transaksi.itemPerkg) * parseInt(transaksi.pricePerkg);
    res.json({ message: 'Transaksi berhasil dibuat', transaksi });
  } catch (error) {
    res.status(400).json({ message: 'Gagal membuat transaksi', error });
  }
};

const updateTransaksi = async (req, res) => {
  try {
    const { namaPelanggan, itemPerkg, pricePerkg } = req.body;
    const transaksi = await Transaksi.update(
      {
        namaPelanggan,
        itemPerkg,
        pricePerkg
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({ message: 'Transaksi berhasil di update', transaksi });
  } catch (error) {
    res.status(400).json({ message: 'Gagal mengupdate transaksi', error });
  }
}

const deleteTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({ message: 'Transaksi berhasil di hapus', transaksi });
  } catch (error) {
    res.status(400).json({ message: 'Gagal menghapus transaksi', error });
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



module.exports = { createTransaksi, getTransaksi, deleteTransaksi, updateTransaksi };