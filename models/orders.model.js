import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref: "Users"},
    movie: {type: Schema.Types.ObjectId, ref: "Movies"},
    price: Number,
    rent_date: Date,
    devolution_date: Date
});

const Orders = mongoose.model('Orders',OrderSchema);

export default Orders;