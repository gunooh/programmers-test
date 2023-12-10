/**
 * 직각삼각형 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120823
 *
 * "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다.
 * 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input = line.split(' ');
  rl.close();
}).on('close', () => {
  // 내 풀이
  // for (let i = 0; i < input; i += 1) {
  //   for (let j = 0; j <= i; j += 1) {
  //     rl.output.write('*');
  //   }
  //   console.log('');
  // }

  // 다른 풀이
  for (let i = 1; i <= input; i += 1) {
    console.log('*'.repeat(i));
  }
});
