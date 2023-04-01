import {products} from './constants/data.js'
import Product from './model/product.schema.js'
export const defaultData = async() => {
try {   
   await Product.insertMany(products)
    console.log("data inserted successfully")
} catch (error) {
    console.log("erroooooooo",error.message)
}
}

