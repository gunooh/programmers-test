/* eslint-disable camelcase */
/**
 * 카운트 다운
 * https://school.programmers.co.kr/learn/courses/30/lessons/181899
 *
 * 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

// const solution = (start_num, end_num) => Array(start_num - end_num + 1).fill(start_num).map((item, idx) => item - idx);
const solution = (start_num, end_num) => Array.from({ length: start_num - end_num + 1 }, (_, idx) => start_num - idx);

const start_num = 10;
const end_num = 3;
console.log(solution(start_num, end_num));
