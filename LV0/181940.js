/* eslint-disable camelcase */
/**
 * 문자열 곱하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181940
 *
 * 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

// 내 풀이
const solution = (my_string, k) => {
  let str = '';
  while (k > 0) {
    str += my_string;
    k -= 1;
  }
  return str;
};

// 다른 풀이
// const solution = (my_string) => my_string.repeat(k);

const my_string = 'string';
const k = 3;
console.log(solution(my_string, k));
