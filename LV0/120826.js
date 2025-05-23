/* eslint-disable camelcase */
/**
 * 특정 문자 제거하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120826
 *
 * 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
 * my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
const solution = (my_string, letter) => [...my_string].filter((item) => item !== letter).join('');

// 다른 풀이
// const solution = (my_string, letter) => my_string.replaceAll(letter, '');

const my_string = 'BCBdbe';
const letter = 'B';
console.log(solution(my_string, letter));
