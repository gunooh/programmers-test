/* eslint-disable camelcase */
/**
 * 문자열의 앞의 n글자
 * https://school.programmers.co.kr/learn/courses/30/lessons/181907
 *
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, n) => my_string.substr(0, n);

const my_string = 'ProgrammerS123';
const n = 11;
console.log(solution(my_string, n));
