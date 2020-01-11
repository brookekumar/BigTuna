'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('answers', [

      // Math

      {
        answer: '15°',
        questions_id: 1,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '30°',
        questions_id: 1,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '45°',
        questions_id: 1,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '60°',
        questions_id: 1,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '72°',
        questions_id: 1,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '1/4',
        questions_id: 2,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '3/8',
        questions_id: 2,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '3/5',
        questions_id: 2,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '5/8',
        questions_id: 2,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '7/8',
        questions_id: 2,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '√8',
        questions_id: 3,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '4',
        questions_id: 3,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '8',
        questions_id: 3,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '16',
        questions_id: 3,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '32',
        questions_id: 3,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '(2,2)',
        questions_id: 4,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '(2,4)',
        questions_id: 4,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '(5,2)',
        questions_id: 4,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '(5,4)',
        questions_id: 4,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '(5,5)',
        questions_id: 4,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '4.2',
        questions_id: 5,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '12.6',
        questions_id: 5,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '14.0',
        questions_id: 5,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '18.0',
        questions_id: 5,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '21.0',
        questions_id: 5,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '–4',
        questions_id: 6,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '–2',
        questions_id: 6,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '0',
        questions_id: 6,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '1',
        questions_id: 6,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '8',
        questions_id: 6,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '8a + 2ac',
        questions_id: 7,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '3a + 3c',
        questions_id: 7,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '2a + c',
        questions_id: 7,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'a + 2c',
        questions_id: 7,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'ac + a2',
        questions_id: 7,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '$86.00',
        questions_id: 8,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '$77.60',
        questions_id: 8,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '$56.00',
        questions_id: 8,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '$50.00',
        questions_id: 8,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '$44.00',
        questions_id: 8,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '-9',
        questions_id: 9,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '-9/4',
        questions_id: 9,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '9/7',
        questions_id: 9,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '7',
        questions_id: 9,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '9',
        questions_id: 9,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'x - 1',
        questions_id: 10,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '2x - 3',
        questions_id: 10,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '2x - 5',
        questions_id: 10,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '2x + 5',
        questions_id: 10,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '3x + 5',
        questions_id: 10,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //English

      {
        answer: 'It burns him',
        questions_id: 1,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'He transforms into a wolf',
        questions_id: 1,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'It sparkles',
        questions_id: 1,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'It starts to disintegrate',
        questions_id: 1,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'He becomes invisible',
        questions_id: 1,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Twilight',
        questions_id: 2,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Dusk',
        questions_id: 2,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Dawn',
        questions_id: 2,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Noon',
        questions_id: 2,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Equinox',
        questions_id: 2,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Guinea pigs',
        questions_id: 3,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Elk',
        questions_id: 3,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'White-tailed deer',
        questions_id: 3,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Grizzly bear',
        questions_id: 3,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Mountain lion',
        questions_id: 3,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Math',
        questions_id: 4,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Biology',
        questions_id: 4,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Gym',
        questions_id: 4,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'History',
        questions_id: 4,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'English',
        questions_id: 4,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '7',
        questions_id: 5,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '5',
        questions_id: 5,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '6',
        questions_id: 5,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '4',
        questions_id: 5,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '8',
        questions_id: 5,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      
      //Reading
      
      {
        answer: 'The teacher, who just started this year, is absolutely terrifying.',
        questions_id: 6,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'That test, which everyone else thought was easy, was impossible.',
        questions_id: 6,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'I don’t know what I’m going to do now.',
        questions_id: 6,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'I get to go on a rollercoaster if I’m tall enough.',
        questions_id: 6,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'None of the above',
        questions_id: 6,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Effected',
        questions_id: 7,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Iffected',
        questions_id: 7,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Infected',
        questions_id: 7,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Affected',
        questions_id: 7,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Any of the above are acceptable.',
        questions_id: 7,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Is',
        questions_id: 8,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Have',
        questions_id: 8,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Should',
        questions_id: 8,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'See',
        questions_id: 8,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Had',
        questions_id: 8,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Who was out early',
        questions_id: 9,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Jogging across the beautiful bridge',
        questions_id: 9,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'The beautiful bridge',
        questions_id: 9,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'In the morning light',
        questions_id: 9,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'In the morning light',
        questions_id: 9,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Quantitative',
        questions_id: 10,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Possessive',
        questions_id: 10,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Descriptive',
        questions_id: 10,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Distributive',
        questions_id: 10,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Demonstrative',
        questions_id: 10,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Science

      {
        answer: 'Renewable resources',
        questions_id: 21,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Geothermal resources',
        questions_id: 21,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Biofuels',
        questions_id: 21,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Fossil fuels',
        questions_id: 21,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Organic fuels',
        questions_id: 21,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Create a second group of participants with ear infections who do not use any ear drops',
        questions_id: 22,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Have participants put ear drops in both their infected ear and healthy ear',
        questions_id: 22,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Have participants use ear drops for only one week',
        questions_id: 22,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Create a second group of participants with ear infrections who use 15 drops a day',
        questions_id: 22,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Put the ear drops in one eye',
        questions_id: 22,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Finding the sequences of bases in plant DNA',
        questions_id: 23,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Attaching the root of one type of plant to the stem of another type of plant',
        questions_id: 23,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Growing a whole plant from a single cell',
        questions_id: 23,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Inserting a gene into plants that makes them resistant to insects',
        questions_id: 23,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Getting a degree in engineering and becoming very tiny to work on jeans',
        questions_id: 23,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Hypothesis',
        questions_id: 24,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Observation',
        questions_id: 24,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Experiment',
        questions_id: 24,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Conclusion',
        questions_id: 24,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Biased',
        questions_id: 24,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'It can lead to antibiotic-resistant bacteria',
        questions_id: 25,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'There will be an antiotic shortage',
        questions_id: 25,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Antibiotics can cause secondary infections',
        questions_id: 25,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Antibiotics will get into the water system',
        questions_id: 25,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Antibiotics is anti-establishment',
        questions_id: 25,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Gathering observations',
        questions_id: 26,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Developing a hypothesis based on observations',
        questions_id: 26,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'Testing the hypothesis',
        questions_id: 26,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'All of the above',
        questions_id: 26,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'A and B only',
        questions_id: 26,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'The most potent (per molecule of gas) of the greenhouse gases',
        questions_id: 27,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'The most abundant greenhouse gas.',
        questions_id: 27,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'More potent (per molecule of gas) than methane.',
        questions_id: 27,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'The main anthropogenic greenhouse gas producced in the United States.',
        questions_id: 27,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'The only greenhouse gas prpesently increasing in the atmosphere.',
        questions_id: 27,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'keeps Earth from spinning too fast.',
        questions_id: 28,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'is caused by the Moon.',
        questions_id: 28,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'results in ice and dark at the poles in winter.',
        questions_id: 28,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'keeps the wind circulating at constant speed around the planet.',
        questions_id: 28,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'is caused by Earths rotational forces.',
        questions_id: 28,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '0-5',
        questions_id: 29,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '0-7',
        questions_id: 29,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '0-10',
        questions_id: 29,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '0-14',
        questions_id: 29,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: '0-16',
        questions_id: 29,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'biodiesel',
        questions_id: 30,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'coal',
        questions_id: 30,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'oil',
        questions_id: 30,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'natural gas',
        questions_id: 30,
        is_correct: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        answer: 'methane',
        questions_id: 30,
        is_correct: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('answers', null, {});
  }
};
