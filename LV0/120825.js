/* eslint-disable camelcase */
/**
 * 문자 반복 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120825
 *
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
 */

// 내 풀이
// const solution = (my_string, n) => {
//   let result = '';
//   for (const char of my_string) {
//     result += char.repeat(n);
//   }
//   return result;
// };

// 다른 풀이
const solution = (my_string, n) => [...my_string].map((char) => char.repeat(n)).join('');

const my_string = 'hello';
const n = 3;
console.log(solution(my_string, n));
