/* eslint-disable camelcase */
/**
 * 원소들의 곱과 합
 * https://school.programmers.co.kr/learn/courses/30/lessons/181929
 *
 * 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list) => {
  const { mul, sum } = num_list.reduce((acc, cur) => {
    acc.mul *= cur;
    acc.sum += cur;
    return acc;
  }, { mul: 1, sum: 0 });
  return mul < sum ** 2 ? 1 : 0;
};

const num_list = [3, 4, 5, 2, 1];
console.log(solution(num_list));
