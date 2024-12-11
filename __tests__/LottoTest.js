import Lotto from '../src/Model/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4, 5, 7], 5],
    [[1, 2, 3, 4, 8, 7], 4],
    [[1, 2, 3, 9, 8, 7], 3],
    [[1, 2, 10, 9, 8, 7], 2],
    [[1, 11, 10, 9, 8, 7], 1],
    [[12, 11, 10, 9, 8, 7], 0],
  ])('당첨 번호가 주어지면 몇 개가 일치하는 지 알 수 있다.', (winningNumber, result) => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getWinningCount(winningNumber)).toBe(result);
  });

  test('보너스 번호가 포함되어 있는지 확인할 수 있다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getBonusInclude(6)).toBe(true);
    expect(lotto.getBonusInclude(7)).toBe(false);
  });
});
