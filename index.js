// importar paquetes
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
// config vars
const PORT = process.env.PORT || 3000;
const DB = process.env.DB || 'mongodb://127.0.0.1/trivia';
// instanciar la app
const app = express();
// conectarse a la DB
mongoose.connect(DB)
  .then(() => { console.log('Todo en orden con MongoDB') })
  .catch(err => console.err(err));
// middleware
app.use(morgan('dev'));
app.use(express.json());
// las rutas de nuestra api
// questions
import questionRouter from './routes/question.js';
app.use('/api', questionRouter);
// users
// import userRouter from './routes/user.js';
// app.use('/api', userRouter);

// listen
app.listen(PORT, () => {
  console.log('Server anda en puerto: ' + PORT);
});
