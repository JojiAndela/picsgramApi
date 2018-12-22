import models from '../models';

const { Pics } = models;

const picsController = {
  getAll: (req, res) => {
    Pics
      .findAll()
      .then((pics) => {
        if (!pics) {
          return res.status(400).send({
            message: 'No Memory found',
          });
        }

        return res.status(200).send({
          message: 'Pics',
          pics,
        });
      });
  },

  createPic: (req, res) => {
    Pics
      .create({
        caption: req.body.caption,
        userId: req.currentUser.id,
        user: req.currentUser.username,
        image: req.file ? req.file.url : null,
      })
      .then(pic => res.status(200).send({
        message: 'Memory successfully created',
        pic,
      }));
  },

  editPic: (req, res) => {
    req.pic.update({
      caption: req.body.caption,
      userId: req.currentUser.id,
      user: req.currentUser.username,
      image: req.file ? req.file.url : req.pic.image,
    })
      .then(updatedPic => res.status(200).send({
        message: 'Memory successfully updated',
        updatedPic,
      }));
  },

  deletePic: (req, res) => {
    req.pic.destroy()
      .then(() => {
        res.status(200).send({
          message: 'Memory successfully deleted',
        });
      });
  },
};

export default picsController;
