/* eslint-disable camelcase */
/**
 * 첫 번째로 나오는 음수
 * https://school.programmers.co.kr/learn/courses/30/lessons/181896
 *
 * 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.
 */

const solution = (num_list) => num_list.findIndex((item) => item < 0);

const num_list = [12, 4, 15, 46, 38, -2, 15];
console.log(solution(num_list));
