const mongoose = require("mongoose");

const personaSchema = mongoose.Schema({
        id: {
            type: Number,
            require: true,
        },
        firstName: {
            type: String,
            require: true,
        },
        lastName: {
            type: String,
            require: true,
        },
        dateOfBirth: {
            type: Date,
            require: true,
        },
        salaryBase: {
            type: Number,
            require: true,
        },
        favoriteColor: {
            type: String,
            require: false,
        },
        createdDate: {
            type: Date,
            require: true,
        }
});

//module.exports = personaSchema;
module.exports = mongoose.model('persona', personaSchema, 'personas');