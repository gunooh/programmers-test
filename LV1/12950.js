/* eslint-disable no-plusplus */
/**
 * 행렬의 덧셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/12950
 *₩
 * 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
 * 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
 */

// const solution = (arr1, arr2) => arr1.reduce((acc, cur, idx) => {
//   for (let i = 0; i < arr1[0].length; i++) {
//     acc[idx][i] = cur[i] + arr2[idx][i];
//   }
//   return acc;
// }, [[], []]);

const solution = (arr1, arr2) => arr1.map((item, idx) => item.map((num, numIdx) => num + arr2[idx][numIdx]));

const arr1 = [[1, 2], [2, 3]];
const arr2 = [[3, 4], [5, 6]];
console.log(solution(arr1, arr2));
