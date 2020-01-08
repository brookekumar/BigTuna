module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    user_password: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    scores_id: {
      type: DataTypes.INTEGER,
      references: 'scores', // sets table 'scores' for reference
      referencesKey: 'id' // sets column 'id' to use as reference point
    }
  });
  return User;
};
