module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    scores_id: {
      type: Sequelize.INTEGER,
      references: 'scores', // sets table for reference
      referencesKey: 'id' // <<< sets column to use as reference point
    }
  });
  return User;
};
