const fnb = require('../models/historyFnBmodels');

const createHistoryFnB = async (req, res) => {
    const { name, paymentStatus, amount} = req.body;
    try {
        const newHistoryFnB = await fnb.create({
            name,
            paymentStatus,
            amount
        });
        res.json(newHistoryFnB);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getHistoryFnB = async (req, res) => {
    try {
        const fnb = await fnb.findAll();
        res.json(fnb);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = { createHistoryFnB, getHistoryFnB};