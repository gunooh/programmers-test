/* eslint-disable no-plusplus */
/**
 * 문자열 돌리기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181945
 *
 * 문자열 str이 주어집니다.
 * 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input = [line];
  rl.close();
}).on('close', () => {
  for (let i = 0; i < input[0].length; i++) {
    console.log(input[0][i]);
  }
});
