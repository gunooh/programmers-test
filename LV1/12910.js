/**
 * 나누어 떨어지는 숫자 배열
 * https://school.programmers.co.kr/learn/courses/30/lessons/12910
 *
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
 * divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 */

const solution = (arr, divisor) => {
  arr = arr.filter((item) => item % divisor === 0).sort((a, b) => a - b);
  if (arr.length === 0) arr.push(-1);
  return arr;
};

const arr = [3, 2, 6];
const divisor = 10;
console.log(solution(arr, divisor));
