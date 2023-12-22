/**
 * 이상한 문자 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12930
 *
 * 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
 * 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
 * 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 */

// 내 풀이
const solution = (s) => s.split(' ').map((word) => [...word].map((char, idx) => (idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())).join('')).join(' ');

// 다른 풀이
// const solution = (s) => {
//   const replacer = (match) => match[0].toUpperCase() + match[1].toLowerCase();
//   return s.toUpperCase().replace(/(\w)(\w)/g, replacer);
// };

const s = 'try hello world';
console.log(solution(s));
