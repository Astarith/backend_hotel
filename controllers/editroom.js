// controllers/editroom.js
const Editroom = require('../models/admin/editroomModels');

// Create
const createEditroom = async (req, res) => {
  try {
    const { room_number, room_name, price, facilities } = req.body;
    const editroom = await Editroom.create({
      room_number,
      room_name,
      price,
      facilities
    });
    res.json(editroom);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Read
const getEditrooms = async (req, res) => {
  try {
    const editrooms = await Editroom.findAll();
    res.json(editrooms);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Update
const updateEditroom = async (req, res) => {
  try {
    const { id_editroom } = req.params;
    const { room_number, room_name, price, facilities } = req.body;
    const editroom = await Editroom.update({
      room_number,
      room_name,
      price,
      facilities
    }, {
      where: {
        id_editroom
      }
    });
    res.json({ message: 'Data berhasil diupdate' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Delete
const deleteEditroom = async (req, res) => {
  try {
    const { id_editroom } = req.params;
    await Editroom.destroy({
      where: {
        id_editroom
      }
    });
    res.json({ message: 'Data berhasil dihapus' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { createEditroom, getEditrooms, updateEditroom, deleteEditroom };