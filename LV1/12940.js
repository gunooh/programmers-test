/**
 * 최대공약수와 최소공배수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12940
 *
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
 * 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 */

// 유클리드 호제법
// 최대공약수(GCD) = x, y의 최대공약수는 y, z의 최대공약수와 같다
// 최소공배수(LCM) = 두 수의 곱을 두 수의 최대공약수로 나눈 값
const solution = (n, m) => {
  const GCD = (x, y) => (y === 0 ? x : GCD(y, x % y));
  const LCM = (x, y) => (x * y) / GCD(x, y);

  return [GCD(n, m), LCM(n, m)];
};

const n = 3;
const m = 12;
console.log(solution(n, m));
