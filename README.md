# javascript-lotto-precourse

## ❗ 요구사항 점검

- [x] 로또 번호의 숫자 범위는 1~45까지이다.
- [x] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- [ ] 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- [x] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
- [ ] 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- [ ] 로또 1장의 가격은 1,000원이다.
- [ ] 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
- [ ] 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.
- [ ] 보너스 번호를 입력 받는다.
- [ ] 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.
- [ ] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
  - 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)
- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

<details>
<summary><b>👉 실행 결과 예시</b></summary>

- **총 실행 결과**

  ```
  구입금액을 입력해 주세요.
  8000

  8개를 구매했습니다.
  [8, 21, 23, 41, 42, 43]
  [3, 5, 11, 16, 32, 38]
  [7, 11, 16, 35, 36, 44]
  [1, 8, 11, 31, 41, 42]
  [13, 14, 16, 38, 42, 45]
  [7, 11, 30, 40, 42, 43]
  [2, 13, 22, 32, 38, 45]
  [1, 3, 5, 14, 22, 45]

  당첨 번호를 입력해 주세요.
  1,2,3,4,5,6

  보너스 번호를 입력해 주세요.
  7

  당첨 통계
  ---
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  총 수익률은 62.5%입니다.
  ```

- **예외 상황 메세지**: `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`

</details>

## ⛳ 구현할 기능 목록

- [x] **1. 로또 1장 발행하기**

  - 번호가 6개인지 확인 및 예외처리
  - 번호가 1~45까지 숫자 범위에 포함되는지 확인 및 예외처리
  - ➕ 번호 중 숫자가 아닌 경우 확인 및 에러처리
  - ➕ 번호 중 중복된 숫자가 있는 경우 확인 및 에러처리
  - 주어진 로또번호를 오름차순으로 정렬

- [x] **2. 랜덤 번호 6개 추첨**

  - 로또에 쓰일 번호 6개 랜덤추첨

- [x] **3. 로또 여러장 발행하기**

  - 로또 개수를 입력받으면 그만큼의 로또를 발급

- [x] **4. 로또 당첨 여부 확인**

  - 당첨번호(+보너스번호)가 주어졌을 때 로또 번호와 비교해 몇 등인지 판단

- [x] **5. 당첨 통계 계산**

  - 1~5등까지 횟수와 처음 투자금이 주어지면 당첨 통계 구성
  - 총 상금을 합산해 수익률 계산
  - 소수점 둘째 자리에서 반올림

- [ ] **6. 구입 금액 입력**

  - 사용자에게서 구입 금액 입력
  - 입력받은 금액이 1,000원으로 나누어 떨어지는지 확인 및 예외처리
  - ➕ 입력받은 금액이 숫자가 아닌 경우 확인 및 에러처리
  - ➕ 입력받은 금액이 너무 크거나, 음수인 경우 경우 확인 및 에러처리
  - ➕ 금액을 입력하지 않은 경우 확인 및 에러처리
  - 1,000원 단위로 구입한 로또 개수 계산

- [ ] **7. 당첨 번호와 보너스 번호 입력**

  - 당첨 번호와 보너스 번호 입력
  - 당첨 번호를 입력했을 때 그 중 중복이 있을 경우 확인 및 예외처리
  - 보너스 번호를 입력했을 때 당첨 번호와 중복인지 확인 및 예외처리

- [ ] **8. 구매한 로또 번호 출력**

  - 계산된 로또 개수만큼 로또 추첨 후 숫자 출력

- [ ] **9. 당첨 통계 출력**

  - 주어진 양식에 맞춰 당첨 내역 및 수익률 출력
