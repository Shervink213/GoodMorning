const mongoose = require('mongoose');

module.exports = async () => {
    try{
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(
            `mongodb+srv://newtest:something@cluster0.qvjpk.mongodb.net/Cluster0retryWrites=true&w=majority`,
            connectionParams
        );
        console.log("connected to database");
    } catch (error){
        console.log('could not connect to database', error);
    }
}