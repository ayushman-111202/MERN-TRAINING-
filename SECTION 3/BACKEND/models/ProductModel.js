const {Schema, model} = require('../connection');

const mySchema = new Schema({
    name: String,
    id: String,
    price: Number,
    offer: Boolean
});

module.exports= model('products',mySchema);