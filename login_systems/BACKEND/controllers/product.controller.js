const productModel = require("../models/product.model");
const productService = require("../services/product.service");

module.exports.CreateProduct = async (req , res) => {
    try {
        const {name, description, stock, price, discount, isNewProduct, sku, images, brand, category} = req.body;

        const isExist = await productModel.findOne({sku: sku})

        if(isExist){
            return res.status(400).json({message: "product already registered !!"})
        }

        const product = await productService.CreateProduct({name, description, stock, price, discount, isNewProduct, sku, images, brand, category});

        return res.status(200).json({msg: "product added successfully !!", product})

    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

// get all product
module.exports.GetAllProduct = async (req, res) => {
    try {
        const products = await productService.GetAllProduct();

        if(!products){
            return res.status(404).json({message: "product not found !!"})
        }

        return res.status(200).json({message: "fetch all products", products})
        
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}