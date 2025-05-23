/**
 * 자릿수 더하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120906
 *
 * 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

 */

const solution = (n) => [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);

const n = 930211;
console.log(solution(n));
