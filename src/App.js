import loopWhileValid from './Util/loopWhileValid.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    const priceString = await loopWhileValid(InputView.getPrice);
    const winningNumber = await loopWhileValid(InputView.getWinningNumber);
    const bonusNumber = await loopWhileValid(InputView.getBonusNumber, winningNumber);
  }
}

export default App;
