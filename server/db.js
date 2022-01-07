const mongoose = require('mongoose');

require('dotenv').config({ path: '../.env'})


module.exports = async () => {
    try{
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(
            `mongodb+srv://${process.env.REACT_APP_DB_USERNAME}:${process.env.REACT_APP_PASSWORD}@cluster0.qvjpk.mongodb.net/${process.env.REACT_APP_DB_NAME}retryWrites=true&w=majority`,
            connectionParams
        );
        console.log("connected to database");
    } catch (error){
        console.log('could not connect to database', error, process.env.REACT_APP_DB_USERNAME);
    }
}