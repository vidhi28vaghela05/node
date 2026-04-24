const productModel = require("../models/product.model");


module.exports.CreateProduct = async ({name, description, stock, price, discount, isNewProduct, sku, images, brand, category}) => {
    if(!name || !description || !stock || !price || !discount || !sku || !images || !brand || !category){
        throw new Error("all field are required !!");
    }

    let product = await productModel.create({name, description, stock, price, discount, isNewProduct, sku, images, brand, category})

    return product;
}