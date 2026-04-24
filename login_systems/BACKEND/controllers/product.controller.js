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