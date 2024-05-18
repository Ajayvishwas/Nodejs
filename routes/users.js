const express = require("express");
const router = express.Router();

const { getUsers, getUsersTesting, createUser,updateUser, deleteUser } = require("../controllers/users");

router.route("/users").get(getUsers);

router.route("/testing").get(getUsersTesting);


router.route("/user/new").post(createUser);


router.route("/user/:id").put(updateUser);

router.route("/user/:id").delete(deleteUser);

module.exports = router;
