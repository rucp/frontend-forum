import express from 'express'; // framework for creating the routering
import bodyParser from 'body-parser'; // enable to send post requests
import mongoose from 'mongoose'; // create models for our posts
import cors from 'cors'; // enable cross origin requests
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// const CONNECTION_URL =
//   'mongodb+srv://educacao:educacao@cluster0.vbh8n.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`~ ~ Server running on PORT: ${PORT} ~ ~`)
    )
  )
  .catch((error) => console.log(error.message));
