/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/**
 * 홀수 vs 짝수
 * https://school.programmers.co.kr/learn/courses/30/lessons/181887
 *
 * 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.
 */

const solution = (num_list) => {
  const { odd, even } = num_list.reduce((acc, cur, idx) => {
    (idx + 1) % 2 === 0 ? acc.even += cur : acc.odd += cur;
    return acc;
  }, { odd: 0, even: 0 });

  return Math.max(odd, even);
};

const num_list = [4, 2, 6, 1, 7, 6];
console.log(solution(num_list));
