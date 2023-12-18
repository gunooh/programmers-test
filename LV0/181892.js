/* eslint-disable camelcase */
/**
 * n번째 원소부터
 * https://school.programmers.co.kr/learn/courses/30/lessons/181892
 *
 * 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list, n) => num_list.slice(n - 1);

const num_list = [5, 2, 1, 7, 5];
const n = 2;
console.log(solution(num_list, n));
