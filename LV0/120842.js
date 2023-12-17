/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/**
 * 2차원으로 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120842
 *
 * 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
 * num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
 * 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
 */

// 내 풀이
// const solution = (num_list, n) => num_list.map((num, idx) => {
//   if ((idx + 1) % n === 1) {
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//       arr.push(num_list[idx + i]);
//     }
//     return arr;
//   }
//   return null;
// }).filter((item) => item !== null);

// 다른 풀이
const solution = (num_list, n) => Array.from({ length: num_list.length / n }, () => []).map(() => num_list.splice(0, n));
// const solution = (num_list, n) => Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n));

const num_list = [100, 95, 2, 4, 5, 6, 18, 33, 948];
const n = 3;
console.log(solution(num_list, n));
