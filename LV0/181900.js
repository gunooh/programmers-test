/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/**
 * 글자 지우기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181900
 *
 * 문자열 my_string과 정수 배열 indices가 주어질 때,
 * my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, indices) => [...my_string].filter((_, idx) => !indices.includes(idx)).join('');

const my_string = 'apporoograpemmemprs';
const indices = [1, 16, 6, 15, 0, 10, 11, 3];

console.log(solution(my_string, indices));
