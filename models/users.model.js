import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: String,
    lastname: String,
    email: String,
    age: Number,
    admin: Boolean,    
    password: String
});

const Users = mongoose.model('Users',UserSchema);

export default Users;