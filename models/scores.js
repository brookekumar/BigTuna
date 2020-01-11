module.exports = function (sequelize, DataTypes) {
    var Scores = sequelize.define("Scores", {
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            model: 'signup', // sets table 'signup' for reference
            key: 'id', // sets column 'id' to use as reference point
        }


    });
    return Scores;
};