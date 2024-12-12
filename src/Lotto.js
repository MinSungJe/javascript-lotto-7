import throwError from './Util/throwError.js';

class Lotto {
  numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throwError('로또 번호는 6개여야 합니다.');

    const numbersSet = new Set(numbers);

    if (numbersSet.size !== 6) throwError('중복값이 있으면 안됩니다.');
  }
}

export default Lotto;
