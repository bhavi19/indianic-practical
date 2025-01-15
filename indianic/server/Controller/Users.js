const Users = require("../Model/Users");

const getAllUsers = async (req, res) => {
    const usersData = await Users.find({})
    res.status(200).json({ usersData });

    res.status(200).json({ msg: "Get User function Testing" });
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get products function Testing" });
}

module.exports = { getAllUsers, getAllProductsTesting }