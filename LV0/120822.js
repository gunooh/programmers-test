/* eslint-disable camelcase */
/**
 * 문자열 뒤집기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120822
 *
 * 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (my_string) => [...my_string].reverse().join('');

const my_string = 'bread';
console.log(solution(my_string));
