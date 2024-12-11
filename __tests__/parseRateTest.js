import parseRate from '../src/Util/parseRate.js';

describe('parseRate 함수 테스트', () => {
  test.each([
    [65.123123, '65.12'],
    [65.12, '65.12'],
    [65, '65.00'],
    [65.127, '65.13'],
  ])('숫자가 주어지면 두 자릿수 반올림을 한다.', (number, result) => {
    expect(parseRate(number)).toBe(result);
  });
});
