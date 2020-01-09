module.exports = function(sequelize, DataTypes) {
    var MathScores = sequelize.define("Math_scores", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

    });
    return MathScores;
  };