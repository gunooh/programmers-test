/**
 * 배열 만들기 1
 * https://school.programmers.co.kr/learn/courses/30/lessons/181901
 *
 * 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 */

// const solution = (n, k) => Array.from({ length: n }, (_, idx) => idx + 1).filter((item) => item % k === 0);

const solution = (n, k) => new Array(n).fill().map((_, idx) => idx + 1).filter((item) => item % k === 0);

// const solution = (n, k) => {
//   const arr = [];

//   // k가 배수 배열의 첫번째 요소가 되므로, 초기값을 k로 지정
//   // i를 k씩 증가시키면, 모든 i값이 k의 배수가 될 것임
//   for (let i = k; i <= n; i += k) {
//     arr.push(i);
//   }

//   return arr;
// };

const n = 10;
const k = 3;
console.log(solution(n, k));
