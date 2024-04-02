const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./database/db_conn");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	bodyparser.urlencoded({
		extended: true,
	})
);

connectDB();
var db = mongoose.connection;
app.post("/add", (req, res) => {
	const category = req.body.category;
	const amt_inp = req.body.amt_inp;
	const desc = req.body.desc;
	const date = req.body.date;
	let data = {
		category: category,
		amount: amt_inp,
		desc: desc,
		date: date,
	};
	db.collection("user").insertOne(data, (err, collection) => {
		if (err) throw err;
		console.log("record inserted");
	});
});

app.get("/", (req, res) => {
	res.set({
		"Allow-access-Allow-origin": "*",
	});
	return res.redirect(path.join(__dirname, "index.html"));
});
app.listen(port, () => {
	console.log(`app is listening on port : ${port}`);
});
