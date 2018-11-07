

const PicsModel = (sequelize, DataTypes) => {
  const Pics = sequelize.define('Pics', {
    caption: DataTypes.TEXT,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  });
  // Pics.associate = function (models) {
  //   // associations can be defined here
  // };
  return Pics;
};

export default PicsModel;
