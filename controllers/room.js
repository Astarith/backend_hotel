const Room = require('../models/roomModels');

// Mendapatkan semua room
const getRoom = async(req, res) => {
    try {
        const response = await Room.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }
}

// Membuat room baru
const createRoom = async (req, res) => {
    try {
        console.log(req.file);
        const { jenis, harga } = req.body;

        // Menambahkan path untuk gambar
        const Image = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : null;

        const newRoom = await Room.create({
            jenis,
            harga,
            Image
        });

        res.status(201).json({
            message: 'Room berhasil ditambahkan',
            data: newRoom
        });
    } catch (error) {
        res.status(500).json({
            message: 'Terjadi kesalahan',
            error: error.message
        });
    }
};

// Mengupdate room
const updateRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const { jenis, harga } = req.body;

        // Mencari room berdasarkan ID
        const room = await Room.findByPk(id);
        if (!room) {
            return res.status(404).json({ message: "Room tidak ditemukan" });
        }

        // Mengupdate gambar jika ada file yang diunggah, jika tidak tetap menggunakan yang lama
        const updatedImage = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : room.image;

        await room.update({
            jenis,
            harga,
            image: updatedImage
        });

        res.status(200).json({
            message: 'Room berhasil diperbarui',
            data: room
        });
    } catch (error) {
        res.status(500).json({
            message: 'Terjadi kesalahan',
            error: error.message
        });
    }
};

// Menghapus room
const deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;

        // Mencari room berdasarkan ID
        const room = await Room.findByPk(id);
        if (!room) {
            return res.status(404).json({ message: "Room tidak ditemukan" });
        }

        await room.destroy();
        res.status(200).json({ message: "Room berhasil dihapus" });
    } catch (error) {
        res.status(500).json({
            message: 'Terjadi kesalahan',
            error: error.message
        });
    }
};

module.exports = { getRoom, createRoom, updateRoom, deleteRoom };
