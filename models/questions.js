module.exports = function (sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
        questions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: DataTypes.INTEGER,
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    });
    return Questions;
};