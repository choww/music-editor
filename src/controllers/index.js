import bcrypt from 'bcrypt';

const getUsers = async (request, response, db) => {
  const users = await db.select('*').from('users').catch(err => {
    response.status(400).json({ dbError: err });
  });

  return response.json(users);
};

const getUser = async (request, response, db) => {
  const { id } = request.body;
  const user = await db.select('*').from('users').where({ id }).catch(err => {
    response.status(400).json({ dbError: err });
  });

  return response.json(user);
};

const createUser = async (request, response, db) => {
  const { firstname, lastname, email, password } = request.body;
  const hash = bcrypt.hashSync(password, 10);

  const user = db('users').insert({ firstname, lastname, email, password: hash })
    .returning('*')
    .catch(err => response.status(400).json({ dbError: err }));

  return response.json(user);
};

const getSongs = async (request, response, db) => {
  const songs = await db.select('*').from('songs').catch(err => {
    response.status(400).json({ dbError: err });
  });
  console.log('songs', response.json(songs));

  return response.json(songs);
};

const getSong = async (request, response, db) => {
  const { id } = request.body;
  const song = await db.select('*').from('songs').where({ id }).catch(err => {
    response.status(400).json({ dbError: err });
  });

  return response.json(songs);
};

const createSongs = async (request, response, db) => {
  const { name, key, bpm, notes, user_id } = request.body;
  const created_at = new Date();
  db('songs').insert({ name, key, bpm, notes, user_id })
    .returning('*')
    .then(song => {
      response.json(song);
    })
    .catch(err => response.status(400).json({ dbError, err }));
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  getSongs,
  getSong,
  createSongs,
};
