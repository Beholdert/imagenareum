import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users';
import cors from 'cors';
import './config/passport';
import './config/mongoose';

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api/users', usersRoutes);

app.listen(8080, () => {
  console.log('server is running');
});
