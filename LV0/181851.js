/**
 * 전국 대회 선발 고사
 * https://school.programmers.co.kr/learn/courses/30/lessons/181851
 *
 * 0번부터 n - 1번까지 n명의 학생 중 3명을 선발하는 전국 대회 선발 고사를 보았습니다.
 * 등수가 높은 3명을 선발해야 하지만, 개인 사정으로 전국 대회에 참여하지 못하는 학생들이 있어 참여가 가능한 학생 중 등수가 높은 3명을 선발하기로 했습니다.
 * 각 학생들의 선발 고사 등수를 담은 정수 배열 rank와 전국 대회 참여 가능 여부가 담긴 boolean 배열 attendance가 매개변수로 주어집니다.
 * 전국 대회에 선발된 학생 번호들을 등수가 높은 순서대로 각각 a, b, c번이라고 할 때 10000 × a + 100 × b + c를 return 하는 solution 함수를 작성해 주세요.
 */

// 내 풀이
// const solution = (rank, attendance) => {
//   const arr = rank.map((score, idx) => ({ score, idx })).filter(({ idx }) => attendance[idx]).sort((a, b) => a.score - b.score);

//   const [a, b, c] = arr.map(({ idx }) => idx);

//   return 10000 * a + 100 * b + c;
// };

// 다른 풀이
const solution = (rank, attendance) => {
  const [[a], [b], [c]] = rank.map((score, idx) => [idx, score]).filter(([i]) => attendance[i]).sort(([_, a], [__, b]) => a - b);

  return 10000 * a + 100 * b + c;
};

const rank = [3, 7, 2, 5, 4, 6, 1];
const attendance = [false, true, true, true, true, false, false];
console.log(solution(rank, attendance));
