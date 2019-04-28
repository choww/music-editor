import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import knex from 'knex';
import knexConfigs from './knexfile';

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

// routes
app.get('/', (req, res) => res.send('hello world'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

