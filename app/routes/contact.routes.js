const express = require("express");
const contacts = require("../controllers/contact.controllers");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findone)
    .post(contacts.update)
    .delete(contacts.delete);

module.exports = router;