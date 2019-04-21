import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const db = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
});

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

