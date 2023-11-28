const express = require("express");
const router = express.Router();
const {getContact, getContacts, postContact, putContact, deleteContact} = require("../controllers/contactController");

//GET
router.route("/").get(getContacts);
//GET CONTACT BY ID
router.route("/:id").get(getContact);
//POST
router.route("/").post(postContact);
//PUT
router.route("/:id").put(putContact);
//DELETE
router.route("/:id").delete(deleteContact);

   module.exports = router;