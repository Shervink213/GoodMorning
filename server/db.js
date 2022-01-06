const mongoose = require('mongoose');

module.exports = async () => {
    try{
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(
            'mongodb://localhost/todo-app',
            connectionParams
        );
        console.log("connected to database");
    } catch (error){
        console.log('could not connect to database', error);
    }
}