

import { response,request } from 'express'
import User from '../model/user.schema.js'
import Product from '../model/product.schema.js'
export const usersignup = async (request, response) => {
    try {
        console.log("request.boyd", request.body)
        const exist = await User.findOne({ UserName: request.body.UserName })
        console.log("exsiiittt", exist)
        if (exist) {
            return response.status(401).json({ message: `Username already exist` })
        }

        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json({ message: user })
        console.log("request.body", request.body)
    } catch (error) {
        console.log("error", error)

        response.status(500).json({ message: error.message })
    }
}


export const userlogin = async (request, response) => {
    try {
        const { login, password } = request.body;
        console.log("inside login", login, password)
        let user = await User.findOne({ UserName: login, Password: password });
        console.log("username",user)
        if (user) {
            return response.status(200).json({data:user, message: `${login} login successfull` })
        }
        else return response.status(401).json({ message: `Invalid login` });

    } catch (error) {
        response.status(500).json({ 'Error': error })
    }
}




