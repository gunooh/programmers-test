/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
/**
 * 짝수 홀수 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120824
 *
 * 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

// 내 풀이
// const solution = (num_list) => {
//   const result = [0, 0];
//   num_list.forEach((num) => (num % 2 === 0 ? result[0] += 1 : result[1] += 1));
//   return result;
// };

// 다른 풀이
const solution = (num_list) => {
  const result = [0, 0];
  num_list.forEach((item) => result[item % 2] += 1);
  return result;
};

const num_list = [1, 2, 3, 4, 5];
console.log(solution(num_list));
