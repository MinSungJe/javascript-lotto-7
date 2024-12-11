import throwError from '../Util/throwError.js';

const Validator = {
  priceInput(priceString) {
    if (!Checker.isNumberString(priceString)) throwError('숫자가 아닙니다.');
    if (!Checker.isUnitNumber(Number(priceString), 1000))
      throwError('단위로 나누어 떨어지지 않습니다.');
    if (!Checker.isRangedNumber(Number(priceString), 1_000, 100_000))
      throwError('범위 내 금액이 아닙니다.');
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
};

export default Validator;
