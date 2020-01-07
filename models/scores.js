module.exports = function(sequelize, DataTypes) {
    var Scores = sequelize.define("Scores", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        math:
        english:
        science:
        reading:

    });
    return Scores;
  };