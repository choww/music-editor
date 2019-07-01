import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import knex from 'knex';
import knexConfigs from './knexfile';
import controllers from './src/controllers';

dotenv.config();
const environment = process.env.NODE_ENV || 'development';

// set up knex
const db = knex(knexConfigs[environment]);


const app = express();

// enable security, CORs, body parsing
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// backend routes
// app.use('/api', routes);

// static routes
app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// app routes
app.get('/users', (req, res) => controllers.getUser(req, res, db));
app.post('/users', (req, res) => controllers.createUser(req, res, db));
app.post('/songs', (req, res) => controllers.createSong(req, res, db));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

