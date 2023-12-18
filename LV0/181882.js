/**
 * 조건에 맞게 수열 변환하기 1
 * https://school.programmers.co.kr/learn/courses/30/lessons/120850
 *
 * 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (arr) => arr.map((item) => {
  if (item >= 50 && item % 2 === 0) {
    return item / 2;
  }
  if (item < 50 && item % 2 === 1) {
    return item * 2;
  }
  return item;
});

const arr = [1, 2, 3, 100, 99, 98];
console.log(solution(arr));
