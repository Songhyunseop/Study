# 연습문제 다운로드 방법
  1. 이 레포지토리를 `fork` 합니다
  2. 로컬 환경으로 `git clone`합니다
  3. `yarn install` 합니다

# 연습문제 푸는 방법
  1. `student.json`에 자신의 정보를 입력합니다. (처음 1회만 설정하면 이후 다시 적을 필요 없음)
  2. 문제를 확인합니다. 문제 폴더는 총 7개입니다
  3. VScode로 각 주에 배정된 문제를 열고, 주석으로 적힌 설명과 안내를 확인합니다
  4. `여기에 코드를 작성하세요`라고 적힌 주석 하단에 문제 해결을 위한 코드를 작성합니다
  5. `yarn test (폴더명)`를 입력하여 문제를 해결했는 지 테스트할 수 있습니다

# 주의사항
 - students.json 파일과 01, 02, 03번 폴더를 제외한 나머지 내용을 수정할 경우 오류가 발생할 수 있습니다! 지정된 파일만 수정해 주세요

# 문제 제출 방법
자바스크립트 및 알고리즘 학습 진도를 체크하기 위해
매 주 금요일에 아래의 명령어를 이용하여 문제 풀이 결과를 제출해 주세요

| 폴더 | 명령어 |
| --- | --- |
| 01_variable,function,type | `yarn submit01` |
| 02_conditional,string,loop | `yarn submit02` |
| 03_array,object | `yarn submit03` |
