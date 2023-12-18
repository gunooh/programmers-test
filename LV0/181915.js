/* eslint-disable camelcase */
/**
 * 문자열 정렬하기 (1)
 * https://school.programmers.co.kr/learn/courses/30/lessons/181915
 *
 * 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, index_list) => index_list.map((item) => my_string[item]).join('');

const my_string = 'cvsgiorszzzmrpaqpe';
const index_list = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];
console.log(solution(my_string, index_list));
