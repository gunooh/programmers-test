/* eslint-disable camelcase */
/**
 * 배열의 원소 삭제하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181844
 *
 * 정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (arr, delete_list) => arr.filter((item) => !delete_list.includes(item));

const arr = [293, 1000, 395, 678, 94];
const delete_list = [94, 777, 104, 1000, 1, 12];
console.log(solution(arr, delete_list));
