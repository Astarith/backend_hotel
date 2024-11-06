const Riwayat = require('../models/resepsionis/riwayatModels');
const validStatus = ['pending', 'approved',];

const createRiwayat = async (req, res) => {
  try {
    const { nama, tanggal_pesan, reservation_code, jumlah_kamar, status } = req.body;
    if (!validStatus.includes(status)) {
      return res.status(400).json({ message: 'Invalid Status' });
    }
    const riwayat = await Riwayat.create({
      nama,
      tanggal_pesan,
      reservation_code,
      jumlah_kamar,
      status
    });
    res.json(riwayat);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateRiwayat = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, tanggal_pesan, reservation_code, jumlah_kamar, status } = req.body;
    if (!validStatus.includes(status)) {
      return res.status(400).json({ message: 'Invalid Status' });
    }
    const riwayat = await Riwayat.update({
      nama,
      tanggal_pesan,
      reservation_code,
      jumlah_kamar,
      status
    }, {
      where: {
        id_riwayat: id
      }
    });
    res.json({ message: 'Data berhasil diupdate' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteRiwayat = async (req, res) => {
  try {
    const { id } = req.params;
    await Riwayat.destroy({
      where: {
        id_riwayat: id
      }
    });
    res.json({ message: 'Data berhasil dihapus' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getRiwayat = async (req, res) => {
  try {
    const riwayat = await Riwayat.findAll();
    res.json(riwayat);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { createRiwayat, updateRiwayat, deleteRiwayat, getRiwayat };