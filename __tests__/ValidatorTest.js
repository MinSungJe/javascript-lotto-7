import Validator from '../src/Service/Validator.js';

describe('Validator 서비스: 구입 금액', () => {
  test('구입 금액은 숫자로 입력받아야 한다.', () => {
    expect(() => {
      Validator.priceInput('hello');
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 1,000원으로 나누어 떨어져야 한다.', () => {
    expect(() => {
      Validator.priceInput('1000');
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.priceInput('1001');
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 일정 범위 이내여야 한다.', () => {
    expect(() => {
      Validator.priceInput('999');
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.priceInput('1000000');
    }).toThrow('[ERROR]');
  });
});
