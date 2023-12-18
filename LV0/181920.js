/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/**
 * 카운트 업
 * https://school.programmers.co.kr/learn/courses/30/lessons/181920
 *
 * 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (start_num, end_num) => Array.from({ length: end_num - start_num + 1 }, (_, idx) => idx + start_num);
// const solution = (start_num, end_num) => Array(end_num - start_num + 1).fill().map((_, idx) => idx + start_num);

const start_num = 3;
const end_num = 10;
console.log(solution(start_num, end_num));
