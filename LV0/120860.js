/**
 * 직사각형 넓이 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120860
 *
 * 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
 * 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요
 */

// 내 풀이
// const solution = (dots) => {
//   const [a, b, c, d] = dots;
//   const x = [...new Set([a[0], b[0], c[0], d[0]])];
//   const y = [...new Set([a[1], b[1], c[1], d[1]])];

//   return Math.abs(x[0] - x[1]) * Math.abs(y[0] - y[1]);
// };

// 다른 풀이
const solution = (dots) => {
  const x = [...new Set(dots.map((dot) => dot[0]))];
  const y = [...new Set(dots.map((dot) => dot[1]))];

  return Math.abs(x[0] - x[1]) * Math.abs(y[0] - y[1]);
};

const dots = [[-1, -1], [1, 1], [1, -1], [-1, 1]];
console.log(solution(dots));
