/**
 * 짝수와 홀수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12937
 *
 * 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
 */

const solution = (num) => (num % 2 === 0 ? 'Even' : 'Odd');

const num = 3;
console.log(solution(num));
