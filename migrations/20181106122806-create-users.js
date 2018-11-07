module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    username: {
      type: Sequelize.STRING,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
    },
    phone: {
      type: Sequelize.STRING,
    },
    dob: {
      type: Sequelize.DATE,
    },
    isMale: {
      type: Sequelize.BOOLEAN,
    },
    bio: {
      type: Sequelize.TEXT,
    },
    last_sign_in_at: {
      type: Sequelize.DATE,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Users'),
};
