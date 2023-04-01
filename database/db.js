import mongoose from "mongoose";

export const Connection = async(username,password) => {
    try {
       await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.to9e6gf.mongodb.net/?retryWrites=true&w=majority`, { useUnifiedTopology: true,
        useNewUrlParser:true
        })
        console.log("database connected sucessfully")
    } catch (error) {
        console.log(`Error while connecting with the databse`,)
    }
}