/**
 * 등수 매기기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120882
 *
 * 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
 * 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
const solution = (score) => {
  const averages = score.map(([x, y]) => (x + y) / 2);
  return averages.map((average) => [...averages].sort((a, b) => b - a).findIndex((item) => item === average) + 1);
};

// 다른 풀이
// const solution = (score) => {
//   const averages = score.map(([x, y]) => (x + y) / 2);
//   return averages.map((el) => averages.filter((v) => v > el).length + 1);
// };

const score = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]];
console.log(solution(score));
