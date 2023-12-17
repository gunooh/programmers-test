/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/**
 * 문자열 계산하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120902
 *
 * my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
 */

// 내 풀이
const solution = (my_string) => {
  const operator = my_string.match(/[+-]/g).map((item) => (item === '+' ? 1 : -1));
  const num = my_string.match(/\d+/g).map((item, idx) => (idx > 0 ? item * operator[idx - 1] : +item));

  return num.reduce((acc, cur) => acc + cur, 0);
};

// 다른 풀이 1
// const solution = eval;

// 다른 풀이 2
// const solution = (my_string) => Function(`return ${my_string}`)();

const my_string = '10 + 1 + 5 - 3';
console.log(solution(my_string));
