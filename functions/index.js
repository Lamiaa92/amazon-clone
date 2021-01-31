const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IFNJ6H2SnrPszu3csmHVNfGpyiIrZO0wRsz7b619x9LFUzvwsqlSvlzcaF2TI3RQfHx8MN3HHq7lSbAekTcRMuZ00RZFLiSLw")

// API 

// App config 

const app = express();

// Middlewares
app.use(cors ({ origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

// Listen command

exports.api = functions.https.onRequest(app)


// Exemple endpoint
// http://localhost:5001/challenge-87799/us-central1/api