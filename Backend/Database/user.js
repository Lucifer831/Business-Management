const mongoose = require('./db.js')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
})

const UserModel = mongoose.model('Employee', UserSchema);

module.exports= UserModel;
