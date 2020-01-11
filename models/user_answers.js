module.exports = function(sequelize, DataTypes) {
    var UserAnswers = sequelize.define("User_answers", {
        answer_id: {
            type: DataTypes.INTEGER,
            model: 'answers', // sets table 'answers' for reference
            key: 'id', // sets column 'id' to use as reference point
          },
        // questions_id:{
        //     type: DataTypes.INTEGER,
        //     model: 'questions', // sets table 'questions' for reference
        //     key: 'id', // sets column 'id' to use as reference point
        // },
        user_id: {
            type: DataTypes.INTEGER,
            model: 'signup', // sets table 'signup' for reference
            key: 'id', // sets column 'id' to use as reference point
        }

    });
    return UserAnswers;
  };