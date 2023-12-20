/**
 * 두 정수 사이의 합
 * https://school.programmers.co.kr/learn/courses/30/lessons/12912
 *
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 * 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
 */

const solution = (a, b) => Array(Math.abs(a - b) + 1).fill().map((_, idx) => (idx + (a < b ? a : b))).reduce((acc, cur) => acc + cur, 0);

const a = 3;
const b = 5;
console.log(solution(a, b));
