/* eslint-disable camelcase */
/**
 * 문자열 정렬하기 (1)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120850
 *
 * 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
 */

const solution = (my_string) => [...my_string].filter((item) => item.match(/\d/)).map(Number).sort((a, b) => a - b);
// const solution = (my_string) => my_string.match(/\d/g).map(Number).sort();
const my_string = 'p2o4i8gj2';
console.log(solution(my_string));
