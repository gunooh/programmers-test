/* eslint-disable camelcase */
/**
 * n개 간격의 원소들
 * https://school.programmers.co.kr/learn/courses/30/lessons/181888
 *
 * 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list, n) => num_list.filter((_, idx) => idx % n === 0);

const num_list = [4, 2, 6, 1, 7, 6];
const n = 2;
console.log(solution(num_list, n));
