import throwError from '../Util/throwError.js';

const Validator = {
  priceInput(priceString) {
    if (!Checker.isNumberString(priceString)) throwError('숫자가 아닙니다.');
    if (!Checker.isUnitNumber(Number(priceString), 1000))
      throwError('단위로 나누어 떨어지지 않습니다.');
    if (!Checker.isRangedNumber(Number(priceString), 1_000, 100_000))
      throwError('범위 내 금액이 아닙니다.');
  },

  winningNumber(winningNumberString) {
    const winningNumber = winningNumberString.split(',');
    if (!Checker.isCorrectLength(winningNumber, 6)) throwError('6개의 값이 아닙니다.');
    if (!Checker.isAllNumberString(winningNumber)) throwError('숫자를 입력하지 않으셨습니다.');
    if (!Checker.isNoRepeat(winningNumber)) throwError('중복값이 있습니다.');
  },
};

const Checker = {
  // string => boolean: string으로 주어진 숫자가 Number인지 확인
  isNumberString: (inputString) => {
    return !!Number(inputString) || inputString === '0';
  },

  // number, number, number => boolean: 주어진 숫자가 범위 내에 있는지 확인
  isRangedNumber: (inputNumber, min, max) => {
    return inputNumber >= min && inputNumber <= max;
  },

  isUnitNumber: (inputNumber, unit) => {
    return inputNumber % unit === 0;
  },

  isCorrectLength: (list, length) => {
    return list.length === length;
  },

  isAllNumberString: (list) => {
    return list.every(Checker.isNumberString);
  },

  isAllRangedNumberString: (list) => {
    return list.every((string) => {
      const number = Number(string);
      return Checker.isRangedNumber(number, 1, 45);
    });
  },

  isNoRepeat: (list) => {
    const set = new Set(list);
    return list.length === set.size;
  },
};

export default Validator;
