const Harga = require('../models/hargaModels');
const Transaksi = require('../models/transaksiModels');

const createHarga = async (req, res) => {
    try {
      const { jenislayanan, harga } = req.body;
      if (!jenislayanan || !harga) {
        return res.status(400).json({ message: 'Input tidak lengkap' });
      }
      const hargaBaru = await Harga.create({
        layanan,
        harga
      });
      
      return res.status(201).json({ message: 'Harga berhasil dibuat', data: hargaBaru });
    } catch (error) {
      return res.status(500).json({ message: 'Error', error: error.message });
    }
  };
  const updateHarga = async (req, res) => {
    try {
      const { id } = req.params;
      const { jenislayanan, harga } = req.body;
      const hargaUpdate = await Harga.update({
        jenislayanan,
        harga
      }, {
        where: {
          id
        }
      });
      return res.status(200).json({ message: 'Harga berhasil diupdate', data: hargaUpdate });
    } catch (error) {
      return res.status(500).json({ message: 'Error', error: error.message });
    }
  };

  const deleteHarga = async (req, res) => {
    try {
      const { id } = req.params;
      const hargaDelete = await Harga.destroy({ where: { id } });
      return res.status(200).json({ message: 'Harga berhasil dihapus', data: hargaDelete });
    } catch (error) {
      return res.status(500).json({ message: 'Error', error: error.message });
    }
  };
  
  const getAllHarga = async (req, res) => {
    try {
      const harga = await Harga.findAll();
      return res.status(200).json({ message: 'Success', data: harga });
    } catch (error) {
      return res.status(500).json({ message: 'Error', error: error.message });
    }
  };

  
  module.exports = { createHarga, updateHarga, deleteHarga, getAllHarga };