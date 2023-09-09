const {Create} = require('../models');

async function createRepair(req, res) {
    try {
        const {name, email, phoneNumber, description, deviceType} = req.body;
        const repair = await Create.create({name, email, phoneNumber, description, deviceType});
        return res.json(repair);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al crear el reparo' });
    }
}

module.exports = {
 createRepair   
}