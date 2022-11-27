const express = require("express")
const app = express();
const mongoose = require('mongoose');
const picRoute= require("./routes/pic");
const reqRoute = require('./routes/requests')

mongoose.connect("mongodb+srv://SOH:SigmaSquad@cluster0.zmwbpml.mongodb.net/SOH?retryWrites=true&w=majority")
.then(console.log("DB connected"))
.catch((err) => console.log(err));
//SOH-SigmaSquad

app.use(express.json());
app.use("/api/pic",picRoute);
app.use('/api/requests',reqRoute);

app.listen("6000", () => {
    console.log("Backend is running");
});