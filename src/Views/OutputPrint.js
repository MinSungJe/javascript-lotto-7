import { Console } from '@woowacourse/mission-utils';

const OutputPrint = {
  message: (message) => {
    Console.print(message);
  },

  error: (errorMessage) => {
    Console.print(`[ERROR] ${errorMessage}`);
  },

  blankLine: () => {
    Console.print('');
  },

  lottoBundleNumbers: (lottoBundle) => {
    Console.print('8개를 구매했습니다.');
    lottoBundle.getList().forEach((lotto) => {
      Console.print(lotto.getPrintString());
    });
    Console.print('');
  },

  statistic: (statistic) => {
    const winningResult = statistic.getWinningResult();
    const earningRate = statistic.getEarningRate();

    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winningResult.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${winningResult.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningResult.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningResult.second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winningResult.first}개`);
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  },
};

export default OutputPrint;
