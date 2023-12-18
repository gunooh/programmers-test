/* eslint-disable camelcase */
/**
 * 정수 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181840
 *
 * 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list, n) => (num_list.includes(n) ? 1 : 0);

const num_list = [15, 98, 23, 2, 15];
const n = 20;
console.log(solution(num_list, n));
