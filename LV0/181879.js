/* eslint-disable camelcase */
/**
 * 길이에 따른 연산
 * https://school.programmers.co.kr/learn/courses/30/lessons/181879
 *
 * 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list) => (num_list.length >= 11 ? num_list.reduce((acc, cur) => acc + cur) : num_list.reduce((acc, cur) => acc * cur));

const num_list = [3, 4];
console.log(solution(num_list));
