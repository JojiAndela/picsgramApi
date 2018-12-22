

const PicsModel = (sequelize, DataTypes) => {
  const Pics = sequelize.define('Pics', {
    caption: DataTypes.TEXT,
    image: DataTypes.STRING,
    userId: DataTypes.UUID,
    user: DataTypes.STRING,
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  });
  Pics.associate = (models) => {
    Pics.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      as: 'owner',
    });
  };
  return Pics;
};

export default PicsModel;
