/**
 * 컨트롤 제트
 * https://school.programmers.co.kr/learn/courses/30/lessons/120853
 *
 * 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다.
 * 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
 */

// 내 풀이
// const solution = (s) => {
//   let prev = '';
//   return s.split(' ').reduce((acc, cur) => {
//     if (cur === 'Z') {
//       return acc - prev;
//     }
//     prev = cur;
//     return acc + Number(cur);
//   }, 0);
// };

// 다른 풀이
const solution = (s) => {
  const stack = [];

  s.split(' ').forEach((item) => {
    if (item === 'Z') stack.pop();
    else stack.push(Number(item));
  });

  return stack.reduce((acc, cur) => acc + cur, 0);
};

const s = '10 Z 20 Z 1';
console.log(solution(s));
