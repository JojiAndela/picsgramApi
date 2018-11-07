import isEmail from 'validator/lib/isEmail';

const options = validate => ({
  isEmail: () => {
    if (validate.req.body.email && !isEmail(validate.req.body.email)) {
      validate.errors.push('Email must be a valid email');
    }
    return options(validate);
  },

  hasElement: (item) => {
    if (!validate.req.body[item]) {
      validate.errors.push(`${item} is required`);
    }
    return options(validate);
  },

  isLength: (item, value) => {
    if (validate.req.body[item] && validate.req.body[item].replace(/\s/g, '').length < value) {
      validate.errors.push(`${item} must have at least a length of ${value}`);
    }
    return options(validate);
  },

  hasSpaces: (item) => {
    if (validate.req.body[item] && /\s/.test(validate.req.body[item])) {
      validate.errors.push(`${item} must not have spaces`);
    }
    return options(validate);
  },
  check: () => {
    if (validate.errors.length > 0) {
      return validate.res.status(400).send({
        message: 'Invalid Parameters',
        errors: validate.errors,
      });
    }
    return validate.next();
  },
});

const validate = (req, res, next) => options({
  req, res, next, errors: [],
});

export default validate;
