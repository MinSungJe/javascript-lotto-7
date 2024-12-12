import Lotto from './Lotto.js';
import loopWhileValid from './Util/loopWhileValid.js';
import InputView from './View/InputView.js';

class App {
  async run() {
    const lotto = await loopWhileValid(this.getLottoNumbers);
    console.log(lotto.numbers);
  }

  async getLottoNumbers() {
    const lottoInput = await InputView.getLottoNumbers();
    const lotto = new Lotto(lottoInput.split(','));
    return lotto;
  }
}

export default App;
