import jwt from 'jsonwebtoken';

const tokenizer = (payload) => {
  const token = jwt.sign(payload, 'secret', { expiresIn: '375d' });
  return token;
};

export default tokenizer;
