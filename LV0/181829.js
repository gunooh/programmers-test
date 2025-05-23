/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/**
 * 이차원 배열 대각선 순회하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181829
 *
 * 2차원 정수 배열 board와 정수 k가 주어집니다.
 * i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (board, k) => {
  let sum = 0;
  board.forEach((item, i) => {
    item.forEach((item2, j) => {
      if (i + j <= k) {
        sum += item2;
      }
    });
  });
  return sum;
};

// const solution = (board, k) => board.reduce((acc, cur, i) => acc + cur.reduce((acc2, cur2, j) => (i + j <= k ? acc2 + cur2 : acc2), 0), 0);

const board = [[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 4, 5]];
const k = 2;
console.log(solution(board, k));
