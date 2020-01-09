module.exports = function (sequelize, DataTypes) {
    var Scores = sequelize.define("Scores", {
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },


    });
    return Scores;
};