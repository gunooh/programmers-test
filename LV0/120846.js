/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/**
 * 합성수 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120846
 *
 * 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        count++;
        break;
      }
    }
  }
  return count;
};

const n = 100;
console.log(solution(n));
