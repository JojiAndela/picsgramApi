import validate from '../helpers/validator';

const signUpValidator = (req, res, next) => {
  const valid = validate(req, res, next);
  valid
    .hasElement('email')
    .hasElement('username')
    .hasElement('password')
    .isEmail()
    .isLength('username', 3)
    .hasSpaces('username')
    .hasSpaces('password')
    .isLength('password', 8)
    .check();
};

const signInValidator = (req, res, next) => {
  const valid = validate(req, res, next);
  valid
    .hasElement('email')
    .hasElement('password')
    .isEmail()
    .check();
};


export { signUpValidator, signInValidator };
