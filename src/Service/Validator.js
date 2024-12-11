import throwError from '../Util/throwError.js';
import Checker from './Checker.js';

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

  bonusNumber(bonusNumberString, winningNumber = []) {
    if (!Checker.isNumberString(bonusNumberString)) throwError('숫자가 아닙니다.');
    if (!Checker.isRangedNumber(Number(bonusNumberString), 1, 45))
      throwError('범위 내 숫자가 아닙니다.');
    if (!Checker.isNotIncludedValue(Number(bonusNumberString), winningNumber))
      throwError('당첨 번호와 중복된 값이 있습니다.');
  },

  lotto(numbers) {
    if (!Checker.isNoRepeat(numbers)) throwError('중복된 숫자가 있습니다.');
    if (!Checker.isCorrectLength(numbers, 6)) throwError('로또 번호의 개수가 6개가 넘습니다.');
  },
};

export default Validator;
