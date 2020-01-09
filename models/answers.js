module.exports = function (sequelize, DataTypes) {
    var Answers = sequelize.define("Answer", {
        answer: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        questions_id: {
            type: DataTypes.INTEGER,
            model: 'questions', // sets table 'scores' for reference
            key: 'id', // sets column 'id' to use as reference point
        },
        is_correct: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    });
    return Answers;
};