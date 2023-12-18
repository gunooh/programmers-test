/**
 * flag에 따라 다른 값 반환하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181933
 *
 * 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (a, b, flag) => (flag ? a + b : a - b);

const a = -4;
const b = 7;
const flag = true;
console.log(solution(a, b, flag));
