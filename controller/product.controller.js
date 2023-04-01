
import Product from '../model/product.schema.js'


export const getProducts = async(request, response) => {
    try {
      let products = await Product.find({})
      console.log("productsss")
      response.status(200).json(products)
    } catch (error) {
        response.status(500).json({message:error.message});
    }
} 


export const getProduct = async(request, response) => {
    try {
        console.log("insideee")
      const {id} = request.params;
      console.log("insideee id",id)
      let productDetails = await Product.findOne({'id':id})
      console.log("productDetails",productDetails)
      response.status(200).json(productDetails)
    } catch (error) {
        response.status(500).json({message:error.message});
    }
} 