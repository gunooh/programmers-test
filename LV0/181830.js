/* eslint-disable no-plusplus */
/**
 * 정사각형으로 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181830
 *
 * 이차원 정수 배열 arr이 매개변수로 주어집니다.
 * arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (arr) => {
  const x = arr.length;
  const y = arr[0].length;

  if (x > y) {
    const num = x - y;

    for (let i = 0; i < num; i++) {
      arr.map((item) => item.push(0));
    }

    return arr;
  }

  if (x < y) {
    const num = y - x;

    for (let i = 0; i < num; i++) {
      arr.push(Array.from({ length: y }, () => 0));
    }

    return arr;
  }

  return arr;
};

const arr = [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]];
console.log(solution(arr));
