// const index= require('./index.js')
// require('dotenv').config()
// const PORT = process.env.PORT

// index.listen(PORT, () => {
//     console.log('yerrrr')
// })

// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});