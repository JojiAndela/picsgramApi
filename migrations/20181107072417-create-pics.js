module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Pics', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    caption: {
      type: Sequelize.TEXT,
    },
    image: {
      type: Sequelize.STRING,
    },
    user: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
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
  down: queryInterface => queryInterface.dropTable('Pics'),
};
