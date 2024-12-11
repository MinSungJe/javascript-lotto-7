import { Console } from '@woowacourse/mission-utils';
import Validator from '../Service/Validator.js';

const InputView = {
  async getPrice() {
    const priceInput = await Console.readLineAsync('구입 금액 입력하셈\n');
    Validator.priceInput(priceInput);
    return Parser.price(priceInput);
  },

  async getWinningNumber() {
    const winningNumberString = await Console.readLineAsync('당첨 번호 입력하셈\n');
    Validator.winningNumber(winningNumberString);
    return Parser.winningNumber(winningNumberString);
  },

  async getBonusNumber(winningNumber) {
    const bonusNumberString = await Console.readLineAsync('보너스 번호 입력하셈\n');
    Validator.bonusNumber(bonusNumberString, winningNumber);
    return Parser.price(bonusNumberString);
  },
};

const Parser = {
  price(priceInput) {
    return Number(priceInput);
  },

  winningNumber(winningNumberString) {
    return winningNumberString.split(',').map(Number);
  },

  bonusNumber(bonusNumberString) {
    return Number(bonusNumberString);
  },
};

export default InputView;
