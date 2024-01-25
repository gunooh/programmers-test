/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/**
 * 세로 읽기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181904
 *
 * 문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
 */

// 내 풀이
// const solution = (my_string, m, c) => {
//   const arr = [];
//   for (let i = 0; i < my_string.length / m; i++) {
//     arr.push(m * i + c);
//   }

//   return [...my_string].filter((_, idx) => arr.includes(idx + 1)).join('');
// };

// 다른 풀이
// const solution = (my_string, m, c) => {
//   let result = '';

//   for (let i = 0; i < my_string.length; i += m) {
//     result += my_string[i + c - 1];
//   }
//   return result;
// };

// 다른 풀이 2
const solution = (my_string, m, c) => [...my_string].filter((_, idx) => idx % m === c - 1).join('');

const my_string = 'ihrhbakrfpndopljhygc';
const m = 4;
const c = 2;
console.log(solution(my_string, m, c));
