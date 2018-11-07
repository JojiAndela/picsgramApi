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
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isMale: {
      type: DataTypes.BOOLEAN,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  });
  users.associate = (models) => {
    users.hasMany(models.Pics, {
      as: 'pics',
      foreignKey: 'userId',
    });
  };

  users.beforeValidate((user) => {
    // eslint-disable-next-line no-param-reassign
    user.password = bcrypt.hashSync(user.password, 8);
  });

  users.checkPassword = (password, userPassword) => bcrypt.compareSync(password, userPassword);
  return users;
};

export default Users;
