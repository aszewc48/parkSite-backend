const mongoose = import('mongoose')
const Schema = mongoose.Schema

const parkSchema = new Schema({
    fullName: String,
    url: String,
    description: String,
    activities: [{
        name: String
    }],
    entranceFees: [{
        cost: String
    }],
    operatingHours: [{
        standardHours: {
            sunday: String,
            monday: String,
            tuesday: String,
            wednesday: String,
            thursday: String,
            friday: String,
            saturday: String
        }
    }],
    addresses: [{
        postalCode: String,
        line1: String,
        line2: String,
        line3: String,
        city: String,
        stateCode: String
    }],
    images: [{
        url: String
    }]
})

const Parks = mongoose.model('Park', parkSchema)

module.export = Parks