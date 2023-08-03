const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/FastDev";

const ConnectDB = async () => {
    try {

        await mongoose.connect(URL)
        console.log("DB is Connected");

    } catch (error) {

        console.log(error);

    }
}


module.exports = ConnectDB;