/**
 * 배열 만들기 1
 * https://school.programmers.co.kr/learn/courses/30/lessons/181901
 *
 * 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (n, k) => Array.from({ length: n }, (_, idx) => idx + 1).filter((item) => item % k === 0);

const n = 10;
const k = 3;
console.log(solution(n, k));
