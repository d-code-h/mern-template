import express from 'express';
import cors from 'cors';
import { nanoid } from 'nanoid';

const app = express();
const PORT = 3000;

const users = [
  {
    id: nanoid(),
    name: 'Emmanuel Samuel',
    gender: 'male',
    aboutMe:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga autem maiores voluptates repudiandae amet, sit nostrum consequuntur molestias? Et necessitatibus repellat aliquam quae dolorum, ullam labore fugiat. Dolore, quidem voluptate?',
  },
  {
    id: nanoid(),
    name: 'Badmus Alice',
    gender: 'female',
    aboutMe:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga autem maiores voluptates repudiandae amet, sit nostrum consequuntur molestias? Et necessitatibus repellat aliquam quae dolorum, ullam labore fugiat. Dolore, quidem voluptate?',
  },
  {
    id: nanoid(),
    name: 'Femi James',
    gender: 'male',
    aboutMe:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga autem maiores voluptates repudiandae amet, sit nostrum consequuntur molestias? Et necessitatibus repellat aliquam quae dolorum, ullam labore fugiat. Dolore, quidem voluptate?',
  },
];

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Backend!!!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
