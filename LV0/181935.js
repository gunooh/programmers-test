/**
 * 홀짝에 따라 다른 값 반환하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181935
 *
 * 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (n) => {
  const arr = Array.from({ length: n }, (_, idx) => idx + 1);
  return arr.reduce((acc, cur) => {
    if (arr.length % 2 === 1) {
      if (cur % 2 === 1) {
        return acc + cur;
      }
    } else if (cur % 2 === 0) {
      return acc + cur ** 2;
    }
    return acc;
  }, 0);
};

const n = 7;
console.log(solution(n));
