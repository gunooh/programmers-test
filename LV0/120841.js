/* eslint-disable no-nested-ternary */
/**
 * 점의 위치 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120841
 *
 * 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
 * x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
 * x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
 * x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
 * x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
 * x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
 */

// 풀이 1
// const solution = (dot) => {
//   const coordMap = new Map([
//     [1, [1, 1]],
//     [2, [-1, 1]],
//     [3, [-1, -1]],
//     [4, [1, -1]],
//   ]);

//   const coord = dot.map((item) => (item > 0 ? 1 : -1));

//   for (const [key, value] of coordMap) {
//     if (String(value) === String(coord)) {
//       return key;
//     }
//   }
// };

// 풀이 2
// const solution = (dot) => {
//   const coordMap = new Map([
//     ['1,1', 1],
//     ['-1,1', 2],
//     ['-1,-1', 3],
//     ['1,-1', 4],
//   ]);

//   const coord = dot.map((item) => (item > 0 ? 1 : -1)).join(',');

//   return coordMap.get(coord);
// };

// 다른 풀이
const solution = (dot) => {
  const [x, y] = dot;
  return x > 0 ? (y > 0 ? 1 : 4) : (y > 0 ? 2 : 3);
};

const dot = [2, 4];
console.log(solution(dot));
