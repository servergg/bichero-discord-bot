const { alias, message } = require('./constants');

const betCommand = args => {
  if (args.length <= 0) {
    return message.error.emptyArgs;
  }

  return `${message.response.confirm} "${args[0]}"`;
}

module.exports = {
  BET_ALIAS: alias,
  betCommand
};
