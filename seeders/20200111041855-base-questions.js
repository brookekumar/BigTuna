'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('questions', [

      // Math questions

      {
        questions: 'What is the degree measure of the acute angle formed by the hands of a 12-hour clock that reads exactly 1 o’clock?',
        category: 'math',
        difficulty: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'What is the probability that a number selected at random from the set {2, 3, 7, 12, 15, 22, 72, 108} will be divisible by both 2 and 3 ?',
        category: 'math',
        difficulty: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'A circle has a circumference of 16 feet. What is the radius of the circle, in feet?',
        category: 'math',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'In the standard (x,y)coordinate plane, what are the coordinates of the midpoint of a line segment whose endpoints are (–3,0) and (7,4) ?',
        category: 'math',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'An industrial cleaner is manufactured using only the 3 secret ingredients A, B, and C, which are mixed in the ratio of 2:3:5, respectively, by weight. How many pounds of secret ingredient B are in a 42-pound (net weight) bucket of this cleaner?',
        category: 'math',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'If n = 8 and 16 • 2m = 4n – 8, then m = ?',
        category: 'math',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Which one of the following expressions has an even integer value for all integers a and c ?',
        category: 'math',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'A DVD player with a list price of $100 is marked down 30%. If John gets an employee discount of 20% off the sale price, how much does John pay for the DVD player ?',
        category: 'math',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'What is the slope of any line parallel to the line 9x + 4y = 7 ?',
        category: 'math',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Which of the following is a factor of the polynomial 2x^2 – 3x – 5 ?',
        category: 'math',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // English questions

      {
        questions: 'Which of these sentences contains a noun clause?',
        category: 'english',
        difficulty: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Fill in the blank: the power of his gaze ______ her deeply.',
        category: 'english',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Which of these is an example of a modal verb?',
        category: 'english',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Identify the participial phrase:“Theresa, who was out early, saw her father jogging across the beautiful bridge in the morning light.',
        category: 'english',
        difficulty: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'What type of adjective is the word "this"?',
        category: 'english',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Reading questions

      {
        questions: 'What happens to Edward’s skin in the sunlight?',
        category: 'reading',
        difficulty: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Which time of day does Edward tell Bella is the safest?',
        category: 'reading',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'What type of animal blood does Edward prefer?',
        category: 'reading',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'What class do Bella and Edward share?',
        category: 'reading',
        difficulty: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Dr. Cullen and his wife have how many adopted children?',
        category: 'reading',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Science questions

      {
        questions: 'Oil, natural gas and coal are examples of …',
        category: 'science',
        difficulty: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Which of the following is an example of genetic engineering?',
        category: 'science',
        difficulty: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Which of these is a major concern about the overuse of antibiotics?',
        category: 'science',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'A scientist is conducting a study to determine how well a new medication treats ear infections. The scientist tells the participants to put 10 drops in their infected ear each day. After two weeks, all participants ear infections had healed. Which of the following changes to the design of this study would most improve the ability to test if the new medication effectively treats ear infections?',
        category: 'science',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'The time a computer takes to start has increased dramatically. One possible explanation for this is that the computer is running out of memory. This explanation is a scientific …',
        category: 'science',
        difficulty: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Application of the scientific method involves ___________. ',
        category: 'science',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'Carbon dioxide is',
        category: 'science',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'The Coriolis effect',
        category: 'science',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'The range of numbers used in the pH scale is:',
        category: 'science',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        questions: 'The worlds most abundant fossil fuel is ___________.',
        category: 'science',
        difficulty: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkDelete('questions', null, {});

  }
};
