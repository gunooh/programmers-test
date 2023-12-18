/* eslint-disable no-bitwise */
/* eslint-disable no-plusplus */
/**
 * 세균 증식
 * https://school.programmers.co.kr/learn/courses/30/lessons/120910
 *
 * 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

 */

// 내 풀이
// const solution = (n, t) => {
//   let result = n;

//   for (let i = 0; i < t; i++) {
//     result *= 2;
//   }
//   return result;
// };

// 다른 풀이 1
// const solution = (n, t) => n << t;

// 다른 풀이 2
const solution = (n, t) => n * (2 ** t);

const n = 7;
const t = 15;
console.log(solution(n, t));
