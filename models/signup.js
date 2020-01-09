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
    user_password: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      types: DataTypes.STRING,
      allowNull: false,
    }
  });
  return User;
};
