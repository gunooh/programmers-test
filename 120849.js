/* eslint-disable camelcase */
/**
 * 모음 제거
 * https://school.programmers.co.kr/learn/courses/30/lessons/120849
 *
 * 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
 * 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 *
 * 입출력 예 #1
 * "nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.
 */

const solution = (my_string) => my_string.replaceAll(/[aeiou]/g, '');

const my_string = 'nice to meet you';
console.log(solution(my_string));
