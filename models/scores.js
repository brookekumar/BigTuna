module.exports = function(sequelize, DataTypes) {
    var Scores = sequelize.define("Scores", {
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
        // math_score_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // science_score_id: {
        //     type: DataTypes.INTEGER,    <========== individual scores to reference not needed?
        //     allowNull: true,
        // },
        // english_score_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        // },
        // reading_score_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        // }, 
        //add created at 

    });
    return Scores;
  };