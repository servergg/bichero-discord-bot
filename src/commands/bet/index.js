const { alias, message } = require('./constants');
const { getGroupNumberByAnimalName } = require('../../utils');

const betCommand = args => {
  if (args.length <= 0) {
    return message.error.emptyArgs;
  }

  const animalName = args[0];
  const groupNumber = getGroupNumberByAnimalName(animalName);

  if (!groupNumber) {
    return `"${animalName}" ${message.error.invalidArg}`;
  }

  return `
    ${message.response.confirmBet} "${animalName}". 
    ${message.response.groupNumber} "${groupNumber}"
  `;
}

module.exports = {
  BET_ALIAS: alias,
  betCommand
};
