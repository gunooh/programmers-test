/* eslint-disable no-plusplus */
/**
 * 약수의 합
 * https://school.programmers.co.kr/learn/courses/30/lessons/12928
 *
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 */

const solution = (n) => {
  const divisor = [n];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) divisor.push(i);
  }

  return divisor.reduce((acc, cur) => acc + cur, 0);
};

const n = 12;
console.log(solution(n));
