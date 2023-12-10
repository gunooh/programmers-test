/**
 * 짝수의 합
 * https://school.programmers.co.kr/learn/courses/30/lessons/120831
 *
 * 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
 */

const solution = (n) => Array.from({ length: n }, (_, index) => index + 1).filter((item) => !(item % 2)).reduce((acc, cur) => acc + cur, 0);

console.log(solution(2));
