/* eslint-disable camelcase */
/**
 * 대문자와 소문자
 * https://school.programmers.co.kr/learn/courses/30/lessons/120851
 *
 * 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
const solution = (my_string) => [...my_string].map((item) => (item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase())).join('');

// 다른 풀이
// const solution = (my_string) => [...my_string].map((item) => item[item.charCodeAt() < 91 ? 'toLowerCase' : 'toUpperCase']()).join('');

const my_string = 'abCdEfghIJ';
console.log(solution(my_string));
