require('dotenv').config();
// console.log(process.env);

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// const PORT = process.env.PORT || 3001;
const PORT = 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// const uri = process.env.MONGODB_URI || "mongodb://localhost/shame_db";
const uri = process.env.MONGODB_URI;
// console.log("uri = ", uri); // this is undefined for some reason

mongoose.connect(uri, {
    // useFindAndModify: false,
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongoDB database connection established successfully");
});

// Start the API server
app.listen(PORT, function () {
    console.log(`API Server now listening on PORT ${PORT}`);
});
