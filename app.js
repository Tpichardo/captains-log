// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log!");
});


// EXPORT
module.exports = app;