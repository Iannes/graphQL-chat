const _createId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

const composeId = () => `_${_createId()}`;

export default composeId;
