import Statistic from '../src/Model/Statistic';

// - 5. 당첨 통계 계산

//   - 1~5등까지 횟수와 처음 투자금이 주어지면 당첨 통계 구성
//   - 총 상금을 합산해 수익률 계산

describe('Statistic 클래스 테스트', () => {
  const lottoStatistic = new Statistic(8000);
  lottoStatistic.addWinningCount('fifth');

  test('8,000원에 5등이 한 번 당첨됐다면, 수익률은 62.5입니다.', () => {
    expect(lottoStatistic.getEarningRate()).toBe('62.5');
  });

  test('통계를 만들 땐 구매 금액을 숫자로 입력해야 한다.', () => {
    expect(() => {
      new Statistic('MinSungJe');
    }).toThrow('[ERROR]');
  });

  test('통계를 만들 땐 최소 금액 이상의 구매 금액을 입력해야 한다.', () => {
    expect(() => {
      new Statistic(900);
    }).toThrow('[ERROR]');
  });

  test('통계를 만들 땐 최대 금액을 넘는 구매 금액을 입력하면 안된다.', () => {
    expect(() => {
      new Statistic(1000000);
    }).toThrow('[ERROR]');
  });

  test('통계를 만들 땐 단위로 나누어 떨어지는 구매 금액을 입력해야 한다.', () => {
    expect(() => {
      new Statistic('MinSungJe');
    }).toThrow('[ERROR]');
  });
});
