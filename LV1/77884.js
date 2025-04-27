/* eslint-disable no-plusplus */
/**
 * 약수의 개수와 덧셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/77884
 *
 * 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
const solution = (left, right) => {
  const divisorLen = (n) => {
    const result = [];
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) result.push(i);
    }
    return [...result, n].length;
  };

  return Array(right - left + 1).fill(left).map((item, idx) => item + idx).reduce((acc, cur) => {
    if (divisorLen(cur) % 2 === 0) {
      return acc + cur;
    }
    return acc - cur;
  }, 0);
};

const left = 13;
const right = 17;
console.log(solution(left, right));
