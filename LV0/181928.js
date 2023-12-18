/* eslint-disable camelcase */
/**
 * 이어 붙인 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/181928
 *
 * 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list) => {
  const { odd, even } = num_list.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      acc.even += String(cur);
    } else {
      acc.odd += String(cur);
    }
    return acc;
  }, { odd: '', even: '' });
  return Number(odd) + Number(even);
};

const num_list = [5, 7, 8, 3];
console.log(solution(num_list));
