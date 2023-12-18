/* eslint-disable camelcase */
/**
 * 잘라서 배열로 저장하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120913
 *
 * 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (my_str, n) => {
//   const arr = [...my_str];
//   const result = [];

//   while (arr.length > 0) {
//     result.push(arr.splice(0, n).join(''));
//   }
//   return result;
// };

// 다른 풀이
const solution = (my_str, n) => my_str.match(new RegExp(`.{1,${n}}`, 'g'));

const my_str = 'abc1Addfggg4556b';
const n = 6;
console.log(solution(my_str, n));
