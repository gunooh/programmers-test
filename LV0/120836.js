/* eslint-disable no-plusplus */
/**
 * 순서쌍의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120836
 *
 * 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
 * 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (n) => {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       count += 1;
//     }
//   }
//   return count;
// };

// 다른 풀이
const solution = (n) => Array.from({ length: n }, (_, idx) => idx + 1).map((_, idx) => idx + 1).filter((item) => n % item === 0);
// const solution = (n) => Array(n).fill().map((_, idx) => idx + 1).filter((item) => n % item === 0);

console.log(solution(99));
