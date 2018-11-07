import bcrypt from 'bcrypt';

const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_male: {
      type: DataTypes.BOOLEAN,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
  // users.associate = function (models) {
  //   // associations can be defined here
  // };

  users.beforeValidate((user) => {
    // eslint-disable-next-line no-param-reassign
    user.password = bcrypt.hashSync(user.password, 8);
  });
  return users;
};

export default Users;
