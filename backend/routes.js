const express = require('express');
const axios = require('axios').default;
const router = express.Router();
var bodyParser = require('body-parser');
const fs = require("fs");
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = "mongodb+srv://manicb:H0under19@cluster0.sqsmbu5.mongodb.net/test";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

router.get('/getAllResults', async(req, res) => {
    client.connect();
	var collection = client.db("TaplenDB").collection("TaplenCollection");
	var itr = await collection.find({}).toArray();
	console.log(itr);
	res.json(itr);
});


router.post('/addResult', async function (req, res) {
	await client.connect();
	var collection = client.db("TaplenDB").collection("TaplenCollection");
	var totalDocs = await collection.countDocuments({});

	await collection.insertOne ({
		id: totalDocs,
		event_name: "Birthday",
		start_date: "5/27/23",
        end_date: "5/28/23"
	});

	res.send({"message": "Data has been added."});
});






module.exports = router;