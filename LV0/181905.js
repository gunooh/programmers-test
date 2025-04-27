/* eslint-disable camelcase */
/**
 * 문자열 뒤집기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181905
 *
 * 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, s, e) => {
  const before = my_string.slice(0, s);
  const middle = my_string.slice(s, e + 1).split('').reverse().join('');
  const after = my_string.slice(e + 1);

  return before + middle + after;
};

const my_string = 'Progra21Sremm3';
const s = 6;
const e = 12;
console.log(solution(my_string, s, e));
