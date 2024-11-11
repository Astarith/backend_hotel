const Checkout = require('../models/resepsionis/checkoutModels');
const validRoomstatus = ['available', 'booked',];
const validPaymentmethod = ['cash', 'transfer',];
const validPaymentstatus = ['done', 'pending',];

const createCheckout = async (req, res) => {
  const { room_status, checkin, checkout, other_charge, payment_method, payment_status, nominal, description, remarks } = req.body;
  if (!validRoomstatus.includes(room_status)) {
    return res.status(400).json({ message: 'Invalid Room Status' });
}
  if (!validPaymentmethod.includes(payment_method)) {
    return res.status(400).json({ message: 'Invalid Payment Method' });
}
if (!validPaymentstatus.includes(payment_status)) {
  return res.status(400).json({ message: 'Invalid Payment Status' });
}
  try {
    const icikiwir = await Checkout.create({
      room_status: room_status,
      checkin2: checkin,
      checkout2: checkout,
      other_charge: other_charge,
      payment_method: payment_method,
      payment_status: payment_status,
      nominal: nominal,
      description2: description,
      remarks2: remarks
    });
    res.json(icikiwir);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteCheckout = async(req, rest) => {
  const { id_out } = req.params;
  try {
      const checkout = await Checkout.destroy({
          where: {
              id: id_out
          }
      })
      rest.json({ message: 'data berhasil dihapus' })
  } catch (error) {
      rest.json({message: error.message})
  }
};

const updateCheckout = async(req, rest) => {
  const { id_out } = req.params;
  const { room_status, checkin, checkout, other_charge, payment_method, payment_status, nominal, description, remarks } = req.body;
  try {
      const bass = await Checkout.update({
        room_status: room_status,
        checkin: checkin,
        checkout: checkout,
        other_charge: other_charge,
        payment_method: payment_method,
        payment_status: payment_status,
        nominal: nominal,
        description: description,
        remarks: remarks
      }, {
          where: {
              id: id_out
          }
      })
      rest.json({ message: 'data berhasil diupdate' })
  } catch (error) {
      rest.json({message: error.message})
  }
};

const getCheckout = async (req, res) => {
  try {
    const checkouts = await Checkout.findAll();
    res.json(checkouts);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { createCheckout, deleteCheckout, updateCheckout, getCheckout, };