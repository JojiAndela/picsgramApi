import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET || 'secret';

/**
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @returns {object} undefined
 */
const auth = (req, res, next) => {
  const token = req.headers.authorization || req.params.token;
  if (!token) {
    return res.status(401).send({
      auth: false,
      message: 'No token provided',
    });
  }

  // verify token with jwt
  return jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        auth: false,
        message: 'Failed to authenticate token! Valid token required',
      });
    }
    // if (req.headers.authorization && !decoded.isVerified) {
    //   return res.status(401).jsend.fail({
    //     auth: false,
    //     message: 'You dont have access. please verify your account',
    //   });
    // }
    req.currentUser = decoded;
    return next();
  });
};
export default auth;
