/**
 * 두 수의 합
 * https://school.programmers.co.kr/learn/courses/30/lessons/181846
 *
 * 0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (a, b) => `${BigInt(a) + BigInt(b)}`;

const a = '18446744073709551615';
const b = '287346502836570928366';
console.log(solution(a, b));
