/**
 * 중복된 숫자 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120583
 *
 * 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (array, n) => array.reduce((acc, cur) => {
  if (cur === n) {
    return acc + 1;
  }
  return acc;
}, 0);

const array = [0, 2, 3, 4];
const n = 2;
console.log(solution(array, n));
