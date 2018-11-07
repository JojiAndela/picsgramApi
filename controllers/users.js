import models from '../models';

const { Users } = models;

const userController = {
  getAll: (req, res) => {
    Users
      .findAll()
      .then(user => res.status(200).send({
        message: 'users',
        user,
      }));
  },
};

export default userController;
