/* eslint-disable camelcase */
/**
 * 뒤에서 5등 위로
 * https://school.programmers.co.kr/learn/courses/30/lessons/181852
 *
 * 정수로 이루어진 리스트 num_list가 주어집니다.
 * num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list) => num_list.sort((a, b) => a - b).slice(5);

const num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];
console.log(solution(num_list));
