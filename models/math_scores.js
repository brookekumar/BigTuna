module.exports = function (sequelize, DataTypes) {
    var MathScores = sequelize.define("Math_scores", {
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

    });
    return MathScores;
};