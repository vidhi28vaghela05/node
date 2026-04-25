const cartService = require("../services/cart.service");
const cartModel = require("../models/cart.model");


// Add To Cart
module.exports.AddToCart = (req , res)=>{
    try {
        const userId = req.user.id;
        const {item} = req.body;
        const Exist = await cartModel.findOne({userId});
        const existProduct = Exist.items.map((val) =>{
            const ids = val.productId;
            return ids;
        });

        existProduct.forEach((e)=>{
            if (e.equals(item.productId)){
                return res.status(400).json({message:"Product Already Into Cart"});
            }
        });

        const cart = await cartService.addToCart({userId, items});
        return res.status(200).json({message:"Add item to cart successfully", cart});

    } catch (error) {
        return res.status(400).json({message : error.message})
    }
}



