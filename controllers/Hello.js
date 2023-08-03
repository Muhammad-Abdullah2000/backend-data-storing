const backend = require('../models/fastDevModel.js');

exports.HelloFunction = async (req, res) => {

    const { name, email } = req.body;

    console.log(req.body.name);
    console.log(req.body.email)

    const back = await backend.create({ name, email });

    res.status(200).json({
        success: true,
        back,
    })



}