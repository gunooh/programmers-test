/* eslint-disable no-return-assign */
/**
 * 배열의 원소만큼 추가하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181861
 *
 * 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.
 */

// 내 풀이
// const solution = (arr) => {
//   let X = [];
//   arr.forEach((number) => X = [...X, ...Array.from({ length: number }, () => number)]);

//   return X;
// };

// 다른 풀이
const solution = (arr) => arr.map((n) => Array(n).fill(n)).flat();
// const solution = (arr) => arr.flatMap((n) => Array(n).fill(n));

const arr = [5, 1, 4];
console.log(solution(arr));
