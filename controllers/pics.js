import models from '../models';

const { Pics } = models;

const picsController = {
  getAll: (req, res) => {
    Pics
      .findAll()
      .then(pics => res.status(200).send({
        message: 'Pics',
        pics,
      }));
  },
};

export default picsController;
