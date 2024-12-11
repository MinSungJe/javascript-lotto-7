import LottoService from '../src/Service/LottoService.js';

describe('LottoService 테스트', () => {
  const lottoService = new LottoService(10000, [1, 2, 3, 4, 5, 6], 7);
  test('처음 가격이 주어지면 구매한 로또의 갯수를 알 수 있다.', () => {
    expect(lottoService.lottoes.length).toBe(10);
  });

  test('로또들의 당첨 여부를 통합한다.', () => {
    expect(lottoService.result);
  });
});
