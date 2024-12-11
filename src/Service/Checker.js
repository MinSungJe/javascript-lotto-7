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

  isNotIncludedValue: (value, list) => {
    return !list.includes(value);
  },
};

export default Checker;
