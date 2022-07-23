import express from 'express'; // framework for creating the routering
import bodyParser from 'body-parser'; // enable to send post requests
import mongoose from 'mongoose'; // create models for our posts
import cors from 'cors'; // enable cross origin requests

// import the routes here

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

