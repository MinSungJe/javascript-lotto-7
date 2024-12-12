import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getLottoNumbers() {
    const input = await Console.readLineAsync('로또 번호 입력하셈\n');
    return input;
  },
};

export default InputView;
