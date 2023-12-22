/**
 * 분수의 덧셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/120808
 *
 * 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
 * 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(numer1, denom1, numer2, denom2) {
  const GCD = (num1, num2) => (num2 > 0 ? GCD(num2, num1 % num2) : num1);
  const LCM = (denom1 * denom2) / GCD(denom1, denom2);

  let numer = numer1 * (LCM / denom1) + numer2 * (LCM / denom2);
  let denom = LCM;
  const gcd = GCD(numer, denom);

  if (gcd !== 1) {
    numer /= gcd;
    denom /= gcd;
  }

  return [numer, denom];
}

console.log(solution(9, 6, 1, 6));
