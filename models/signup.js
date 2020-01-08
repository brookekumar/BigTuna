module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: 1,
      primaryKey: 1,
      allowNull: 0
    },
    email: {
      type: DataTypes.STRING,
      allowNull: 0,
      validate: {
        isEmail: 1
      }
    },
    user_password: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    scores_id: {
      type: DataTypes.INTEGER,
      model: 'scores', // sets table 'scores' for reference
      key: 'id', // sets column 'id' to use as reference point
    }
  });
  return User;
};
