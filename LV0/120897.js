/* eslint-disable no-plusplus */
/**
 * 약수 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120897
 *
 * 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (n) => {
//   const result = [];

//   for (let i = 1; i <= n / 2; i++) {
//     if (n % i === 0) {
//       result.push(i);
//     }
//   }

//   return [...result, n];
// };

// 다른 풀이 1
// const solution = (n) => Array(n).fill().map((_, idx) => idx + 1).filter((item) => n % item === 0);

// 다른 풀이 2
const solution = (n) => {
  const result = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      result.push(n / i);
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);
};

const n = 100;
console.log(solution(n));
