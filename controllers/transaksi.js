// // Import model Transaksi dan HistoryFnB
// const Transaksi = require('../models/transaksiModels');
// const HistoryFnB = require('../models/historyFnBmodels');

// // Membuat Transaksi baru
// const createTransaksi = async (req, res) => {
//   try {
//     const { biaya_layanan, historyFnB } = req.body;

//     // Buat transaksi baru beserta history FnB jika ada
//     const transaksi = await Transaksi.create(
//       {
//         biaya_layanan
//       },
//       {
//         include: [{ model: HistoryFnB, as: 'historyFnB' }],
//       }
//     );

//     res.json({ message: 'Transaksi created successfully', data: transaksi });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { createTransaksi };
