/**
 * 배열의 유사도
 * https://school.programmers.co.kr/learn/courses/30/lessons/120903
 *
 * 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (s1, s2) => s1.reduce((acc, cur) => {
//   s2.forEach((item) => {
//     if (cur === item) {
//       acc += 1;
//     }
//   });
//   return acc;
// }, 0);

// 다른 풀이 1
// const solution = (s1, s2) => s1.filter((item) => s2.includes(item)).length;

// 다른 풀이 2
const solution = (s1, s2) => s1.length + s2.length - [...new Set([...s1, ...s2])].length;

const s1 = ['a', 'b', 'c'];
const s2 = ['com', 'b', 'd', 'p', 'c'];
console.log(solution(s1, s2));
