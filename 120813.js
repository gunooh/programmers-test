/**
 * 짝수는 싫어요
 * https://school.programmers.co.kr/learn/courses/30/lessons/120813
 *
 * 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (n) => {
  // const arr = Array.from({ length: n }, (_, index) => index + 1).filter((item) => item % 2 === 1);
  const arr = Array(n).fill().map((_, index) => index + 1).filter((item) => item % 2 === 1);
  return arr;
};

console.log(solution(55));
