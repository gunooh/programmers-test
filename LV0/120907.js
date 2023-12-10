/* eslint-disable no-eval */
/**
 * OX퀴즈
 * https://school.programmers.co.kr/learn/courses/30/lessons/120907
 *
 * 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
 * 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (quiz) => quiz.map((item) => {
//   const operator = /-\s/.test(item) ? '-' : '+';
//   const [number1,, number2,, result] = item.split(/( - | \+ |=)/);

//   if (operator === '-') {
//     return Number(number1) - Number(number2) === Number(result) ? 'O' : 'X';
//   }
//   return Number(number1) + Number(number2) === Number(result) ? 'O' : 'X';
// });

const solution = (quiz) => quiz.map((item) => {
  const [calc, result] = item.split(' = ');
  const operator = calc.includes('+') ? 1 : -1;
  const [x, y] = calc.split(operator === 1 ? ' + ' : ' - ');

  return +x + (+y * operator) === +result ? 'O' : 'X';
});

const quiz = ['19 - 6 = 13', '-5 + -66 = 71', '5 - 15 = 63', '3 - 1 = 2'];
console.log(solution(quiz));
