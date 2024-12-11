import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBlank() {
    Console.print('');
  },

  printLottoes(lottoes) {
    OutputView.printMessage(`${lottoes.length}개를 구매했습니다.`);
    lottoes.forEach((lotto) => OutputView.printMessage(lotto.getNumberString()));
    OutputView.printBlank();
  },

  printStatistic(lottoResult, rate) {
    OutputView.printMessage('당첨 통계');
    OutputView.printMessage('---');
    OutputView.printMessage(`3개 일치 (5,000원) - ${lottoResult.fifth}개`);
    OutputView.printMessage(`4개 일치 (50,000원) - ${lottoResult.fourth}개`);
    OutputView.printMessage(`5개 일치 (1,500,000원) - ${lottoResult.third}개`);
    OutputView.printMessage(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.second}개`);
    OutputView.printMessage(`6개 일치 (2,000,000,000원) - ${lottoResult.first}개`);
    OutputView.printMessage(`총 수익률은 ${rate}%입니다.`);
  },
};

export default OutputView;
