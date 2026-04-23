const userModel = require("../models/user.model");

// get all user
module.exports.allUser = async () => {
    return await userModel.find({role: "user"});
}

// delete single user
module.exports.deleteUser = async(id) => {
    return await userModel.findOneAndDelete({_id: id});
};