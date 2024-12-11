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

describe('Validator 서비스: 당첨 번호', () => {
  test('당첨 번호는 모두 숫자로 이루어져 있어야 한다.', () => {
    expect(() => {
      Validator.winningNumber('1,2,3,4,hello,6');
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.winningNumber('1,2,3,4,,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호는 중복이 없어야 한다.', () => {
    expect(() => {
      Validator.winningNumber('1,2,3,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호는 6개여야 한다.', () => {
    expect(() => {
      Validator.winningNumber('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('올바른 입력', () => {
    expect(() => {
      Validator.winningNumber('1,2,3,4,5,6');
    }).not.toThrow('[ERROR]');
  });
});

describe('Validator 클래스 검증: 보너스 번호', () => {
  test('보너스 번호는 숫자로 이루어져 있다.', () => {
    expect(() => {
      Validator.bonusNumber('hello');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 1부터 45 이내의 숫자이다.', () => {
    expect(() => {
      Validator.bonusNumber('60');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 당첨 번호와 중복이 되면 안된다.', () => {
    expect(() => {
      Validator.bonusNumber('1', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('올바른 입력', () => {
    expect(() => {
      Validator.bonusNumber('7', [1, 2, 3, 4, 5, 6]);
    }).not.toThrow('[ERROR]');
  });
});
