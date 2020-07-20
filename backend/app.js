require('dotenv').config();
const express = require('express'),
	  cors = require('cors'),
	  morgan = require('morgan'),
	  helmet = require('helmet'),
	  body_parser = require('body-parser'),
	  connect = require('./db/connect');

const app = express();
//////////////////
// Middlewares  //
//////////////////

app.use(morgan('dev'));
app.use(helmet());
app.use(body_parser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ///////////////////////
// Database Connection //
// ///////////////////////
connect();


////////////////
// API ROUTES //
////////////////
app.use('/api/v1', require('./routes'));


/////////////////////////
// ERROR & 404 Handler //
/////////////////////////
app.use(require('./middlewares/404'));
app.use(require('./middlewares/error'));

module.exports = app;