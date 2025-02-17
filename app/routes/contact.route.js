const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Received ${req.method} request at ${req.originalUrl}`);
    console.log("Request Body:", req.body);
    next();
});

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;