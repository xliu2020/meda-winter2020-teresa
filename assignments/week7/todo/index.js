const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { connect } = require("http2");

const dbCredentials = "mongodb+srv://todouser:todouser@cluster0.oqdfn.mongodb.net/todoapp?retryWrites=true&w=majority;"
const options={useNewUrlParser:true, useFindAndModify:false, useUnifiedTopology: true};

let dbConnection = mongoose.connect(dbCredentials,options, (error) => {
    if(error) {
        console.log("Mongoose error:" + error);
    } else { 
        console.log("MongoDB connection opened");
    }
})


const port = 3000;

const app = express();
const http = require("http").Server(app);
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is running on port" + port);

app.use("/", express.static("client/"));