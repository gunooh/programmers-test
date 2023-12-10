/**
 * 피자 나눠 먹기(2)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120815
 *
 * 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
 * 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
 */

// 내 풀이
const solution = (n) => {
  const piece = 6;
  const GCD = (num1, num2) => (num2 > 0 ? GCD(num2, num1 % num2) : num1);
  const LCM = (piece * n) / GCD(piece, n);

  return LCM / piece;
};

// 다른 풀이
// const solution = (n) => {
//   let pizza = 1;

//   while ((pizza * 6) % n) {
//     pizza += 1;
//   }

//   return pizza;
// };

console.log(solution(10));
