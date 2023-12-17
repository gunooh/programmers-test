/* eslint-disable no-unused-expressions */
// /* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/**
 * 숨어있는 숫자의 덧셈 (2)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120864
 *
 * 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (my_string) => {
//   let numArr = [];
//   return [...my_string].reduce((acc, cur, curIdx) => {
//     if (cur.match(/\d/)) {
//       numArr.push(cur);
//       if (curIdx === my_string.length - 1) {
//         return acc + Number(numArr.join(''));
//       }
//     } else {
//       const num2 = [...numArr];
//       numArr = [];
//       return acc + Number(num2.join(''));
//     }

//     return acc;
//   }, 0);
// };

// 다른 풀이
const solution = (my_string) => my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);

const my_string = '1aAb1B2cC34';

console.log(solution(my_string));
