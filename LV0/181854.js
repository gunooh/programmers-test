/* eslint-disable no-mixed-operators */
/**
 * 배열의 길이에 따라 다른 연산하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181854
 *
 * 정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.
 */

// 내 풀이
// const solution = (arr, n) => {
//   const isOdd = (item) => item % 2 === 0;

//   return arr.map((item, idx) => {
//     if (isOdd(arr.length) && !isOdd(idx)) {
//       return item + n;
//     }
//     if (!isOdd(arr.length) && isOdd(idx)) {
//       return item + n;
//     }
//     return item;
//   });
// };

// 다른 풀이
const solution = (arr, n) => arr.map((item, idx) => (arr.length % 2 !== idx % 2 ? item + n : item));

const arr = [49, 12, 100, 276, 33];
const n = 27;
console.log(solution(arr, n));
