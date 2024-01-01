/**
 * x만큼 간격이 있는 n개의 숫자
 * https://school.programmers.co.kr/learn/courses/30/lessons/12954
 *
 * 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
 */

const solution = (x, n) => Array(n).fill().map((_, idx) => x * (idx + 1));
// const solution = (x, n) => Array.from({ length: n }, (_, idx) => x * (idx + 1));

const x = -4;
const n = 2;
console.log(solution(x, n));
