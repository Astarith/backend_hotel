const Checkin = require('../models/resepsionis/checkinModels');

const createCheckin = async(req, rest) => {
    const { checkin, checkout, wakeup_call, purpose_of_visit, id_number, nationality, remarks, description } = req.body;
    try {
        const check = await Checkin.create({
        checkin,
        checkout,
        wakeup_call,
        purpose_of_visit,
        id_number,
        nationality,
        remarks,
        description
        })
        rest.json(check)
    } catch (error) {
        rest.json({message: error.message})
    }
};

const deleteCheckin = async(req, rest) => {
    const { id } = req.params;
    try {
        const checkin = await Checkin.destroy({
            where: {
                id: id
            }
        })
        rest.json({ message: 'data berhasil dihapus' })
    } catch (error) {
        rest.json({message: error.message})
    }
};

const updateCheckin = async(req, rest) => {
    const { id } = req.params;
    const { checkin, checkout, wakeup_call, purpose_of_visit, id_number, nationality, remarks, description } = req.body;
    try {
        const check = await Checkin.update({
            checkin,
            checkout,
            wakeup_call,
            purpose_of_visit,
            id_number,
            nationality,
            remarks,
            description
        }, {
            where: {
                id: id
            }
        })
        rest.json({ message: 'data berhasil diupdate' })
    } catch (error) {
        rest.json({message: error.message})
    }
};

const getCheckin = async (req, res) => {
  try {
    const checkins = await Checkin.findAll();
    res.json(checkins);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { createCheckin, deleteCheckin, updateCheckin, getCheckin};
