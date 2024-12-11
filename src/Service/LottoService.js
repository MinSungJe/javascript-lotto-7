class LottoService {
  #lottoes;
  result = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    miss: 0,
  };

  constructor(lottoes, winningNumber, bonusNumber) {
    this.#lottoes = lottoes;
    this.#getResult(winningNumber, bonusNumber);
  }

  #getResult(winningNumber, bonusNumber) {
    this.#lottoes.forEach((lotto) => {
      this.result[lotto.getResult(winningNumber, bonusNumber)] += 1;
    });
  }

  calculateWinnings() {
    return (
      2_000_000_000 * this.result.first +
      30_000_000 * this.result.second +
      1_500_000 * this.result.third +
      50_000 * this.result.fourth +
      5_000 * this.result.fifth
    );
  }
}

export default LottoService;
