const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect('mongodb+srv://agrawalbhavesh80:bhavesh1234@cluster0.y3hgrx3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const db = mongoose.connection;
db.on("error",(error) => console.log(error));
db.once("open", () => console.log("Connected to database"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());
const quoteRouter = require("./routes/quote");
app.use('/',quoteRouter);
app.listen(5050,() => console.log("server started on port 5050"));
