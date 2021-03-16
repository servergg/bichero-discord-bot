const { ANIMAL_DICT } = require('./constants');

const getGroupValues = groupNumber => {
  const result = groupNumber * 4;

  return [result - 3, result - 2, result - 1, result]
}

const replaceLatinCharacters = string => {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const getGroupNumberByAnimalName = animalName => {
  const groupNumber = ANIMAL_DICT[replaceLatinCharacters(animalName)];

  return groupNumber;
}

module.exports = {
  getGroupValues,
  getGroupNumberByAnimalName
}
