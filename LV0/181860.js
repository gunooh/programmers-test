/* eslint-disable no-plusplus */
/**
 * 빈 배열에 추가, 삭제하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120850
 *
 * 아무 원소도 들어있지 않은 빈 배열 X가 있습니다.
 * 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때,
 * flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.
 */

// 내 풀이
// const solution = (arr, flag) => {
//   const X = [];
//   flag.forEach((item, idx) => {
//     if (item) {
//       for (let i = 0; i < arr[idx] * 2; i++) {
//         X.push(arr[idx]);
//       }
//     } else {
//       for (let i = 0; i < arr[idx]; i++) {
//         X.pop();
//       }
//     }
//   });
//   return X;
// };

// 다른 풀이
const solution = (arr, flag) => arr.reduce((acc, cur, idx) => (flag[idx] ? [...acc, ...Array.from({ length: cur * 2 }, () => cur)] : acc.slice(0, -cur)), []);

const arr = [3, 2, 4, 1, 3];
const flag = [true, false, true, false, false];
console.log(solution(arr, flag));
