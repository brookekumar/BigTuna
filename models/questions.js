module.exports = function(sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: 1,
            primaryKey: 1,
            allowNull: 0
        },
        
    });
    return Questions;
  };