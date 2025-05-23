/**
 * n의 배수 고르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120905
 *
 * 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

 */

const solution = (n, numlist) => numlist.filter((num) => num % n === 0);

const n = 12;
const numlist = [2, 100, 120, 600, 12, 12];
console.log(solution(n, numlist));
