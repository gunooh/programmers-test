/**
 * 공배수
 * https://school.programmers.co.kr/learn/courses/30/lessons/181936
 *
 * 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (number, n, m) => (number % n === 0 && number % m === 0 ? 1 : 0);

const number = 60;
const n = 2;
const m = 3;
console.log(solution(number, n, m));
