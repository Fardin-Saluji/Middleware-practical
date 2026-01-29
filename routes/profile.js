const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(" Welcome to your profile page");
});

module.exports = router;

// http://localhost:3000/profile?token=12345