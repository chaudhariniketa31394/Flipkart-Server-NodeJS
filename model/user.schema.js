import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    FirstName: {
        type:String,
        required:true,
        trim:true,
        min:5,
        max: 20
    },
    LastName: {
        type:String,
        required:true,
        trim:true,
        min:5,
        max: 20
    },
    UserName: {
        type:String,
        required:true,
        trim:true,
        index:true,
        unique:true,
        lowercase:true
    
    },
    Email: {
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20,
        lowercase:true
    },
    Password: {
        type:String,
        required:true

    },
    Phone: {
        type:String,
        required:true
    }
   
})

const User = mongoose.model('user',userSchema)
export default User;