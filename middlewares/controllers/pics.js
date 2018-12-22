import models from '../../models';

const { Pics } = models;

const picsMid = {
  findPic: (req, res, next) => {
    const { picId } = req.params;
    Pics
      .findByPk(picId)
      .then((pic) => {
        if (!pic) {
          return res.status(400).send({
            message: `Memory with id ${picId} not found`,
          });
        }
        req.pic = pic;
        return next();
      });
  },


};

export default picsMid;
