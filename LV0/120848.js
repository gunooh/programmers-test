/* eslint-disable no-plusplus */
/**
 * 팩토리얼
 * https://school.programmers.co.kr/learn/courses/30/lessons/120848
 *
 * i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
 */

const solution = (int) => {
  let i = 1;
  const factorial = (n) => (n === 1 ? 1 : factorial(n - 1) * n);
  while (factorial(i) <= int) {
    i++;
  }
  return i - 1;
};

const int = 3628800;
console.log(solution(int));
