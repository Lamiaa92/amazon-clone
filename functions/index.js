const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IFNJ6H2SnrPszu3csmHVNfGpyiIrZO0wRsz7b619x9LFUzvwsqlSvlzcaF2TI3RQfHx8MN3HHq7lSbAekTcRMuZ00RZFLiSLw");

// API 

// App config 

const app = express();

// Middlewares
app.use(cors ({ origin: true}));
app.use(express.json());  //will allow us to pass data and send data in the Json format

// API routes
// APIs have different types of request, get requests and post requests

app.get('/', (request, response) => response.status(200).send('hello world'))

app.post ('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM ! ! ! for this amount >>>>>' , total)

    const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // subunits of the currency
            currency: "usd",
    });

    // OK - Created 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// Listen command

exports.api = functions.https.onRequest(app)


// Exemple endpoint
// http://localhost:5001/challenge-87799/us-central1/api