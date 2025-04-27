/**
 * 2의 영역
 * https://school.programmers.co.kr/learn/courses/30/lessons/181894
 *
 * 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
 * 단, arr에 2가 없는 경우 [-1]을 return 합니다.
 *
 */

const solution = (arr) => {
  const firstIdx = arr.indexOf(2);
  const lastIdx = arr.lastIndexOf(2);

  return firstIdx === -1 ? [-1] : arr.slice(firstIdx, lastIdx + 1);
};

// const arr = [1, 2, 1, 4, 5, 2, 9];
// const arr = [1, 2, 1];
// const arr = [1, 1, 1];
const arr = [1, 2, 1, 2, 1, 10, 2, 1];

console.log(solution(arr));
