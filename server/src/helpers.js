const _generateRandomNum = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

const createId = () => `_${_generateRandomNum()}`;

export default createId;
