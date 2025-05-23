/**
 * 수 조작하기 1
 * https://school.programmers.co.kr/learn/courses/30/lessons/181926
 *
 * 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
 * "w" : n이 1 커집니다.
 * "s" : n이 1 작아집니다.
 * "d" : n이 10 커집니다.
 * "a" : n이 10 작아집니다.
 * 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (n, control) => {
  const { result } = [...control].reduce((acc, cur) => {
    acc.result += acc[cur];
    return acc;
  }, {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
    result: n,
  });
  return result;
};

const n = 1;
const control = 'wwww';
console.log(solution(n, control));
