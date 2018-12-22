import bodyParser from 'body-parser';
import express from 'express';
import userRoute from './routes/users';
import picsRoute from './routes/pics';

const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoute);
app.use('/pics', picsRoute);

app.get('/', (req, res) => res.send({ message: 'Welcome to picsgram!' }));

app.listen(port, () => console.log('App listening on port 4000!'));

export default app;
