module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_email: DataTypes.STRING,
        user_password: DataTypes.STRING,
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      scores_id: DataTypes.STRING
    });
    return User;
  };
  