/**
 * 문자열 정렬하기 (1)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120850
 *
 * 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
 * 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
 */

const solution = (n) => [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);

const n = 987;
console.log(solution(n));
