const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// MIDDLEWARES
const authenticationMiddleware = require('./middlewares/authentication');
const errorMiddleware = require('./middlewares/error');

// IMPORT ROUTES
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// INITIATE APP
const app = express();

// CORS
app.use(
  cors({
    origin: '*',
  }),
);

// LOGGING
app.use(logger('dev'));

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// AUTHENTICATION
app.use(authenticationMiddleware);

// ROUTE HANDLERS
app.use('/', indexRouter);
app.use('/users', usersRouter);


// ERROR HANDLERS
app.use(errorMiddleware);

// EXPORT APP
module.exports = app;
