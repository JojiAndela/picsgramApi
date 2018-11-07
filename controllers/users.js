import models from '../models';
import tokenizer from '../helpers/tokenizer';

const { Users } = models;

const userController = {
  signup: (req, res) => {
    Users
      .findOrCreate({
        where: {
          email: req.body.email.replace(/\s/g, ''),
        },
        defaults: {
          username: req.body.username.replace(/\s/g, ''),
          password: req.body.password.replace(/\s/g, ''),
        },
      })
      .spread((user, created) => {
        if (!created) {
          return res.status(400).send({ message: 'email is already taken' });
        }
        const token = tokenizer({
          id: user.id,
          username: user.username,
          isVerified: user.isVerified,
        });
        return res.status(201).send({
          message: 'User is successfully signed up',
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            isVerified: user.isVerified,
            token,
          },
        });
      })
      .catch(err => res.status(500).send({ message: 'User signup was not successful', err }));
  },

  login: (req, res) => {
    Users
      .findOne({
        where: {
          email: req.body.email,
        },
      })
      .then((user) => {
        if (!user) {
          return res.status(401).send({
            message: 'Invalid credentials supplied',
          });
        }
        const checkPassword = Users.checkPassword(req.body.password, user.password);
        if (!checkPassword) {
          return res.status(400).send({ message: 'Invalid credentials supplied' });
        }
        const token = tokenizer({
          id: user.id,
          username: user.username,
          isVerified: user.isVerified,
        });
        return res.status(201).send({
          message: 'User is successfully signed in',
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            isVerified: user.isVerified,
            token,
          },
        });
      })
      .catch(err => res.status(500).send({ message: 'User login was not successful', err }));
  },
};

export default userController;
