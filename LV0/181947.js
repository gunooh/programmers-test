/**
 * 덧셈식 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181947
 *
 * 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
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
  const [x, y] = input;
  console.log(`${x} + ${y} = ${+x + +y}`);
});
