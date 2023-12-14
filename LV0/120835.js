/* eslint-disable no-plusplus */
/**
 * 진료 순서 정하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120835
 *
 * 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
 * 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (emergency) => emergency.map((item) => {
//   let order = emergency.length;
//   for (let i = 0; i < emergency.length; i++) {
//     if (item > emergency[i]) {
//       order -= 1;
//     }
//   }
//   return order;
// });

// 다른 풀이
const solution = (emergency) => {
  const order = [...emergency].sort((a, b) => b - a);

  return emergency.map((item) => order.indexOf(item) + 1);
};
const emergency = [3, 76, 24, 17];
console.log(solution(emergency));
