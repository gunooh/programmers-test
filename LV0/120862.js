/* eslint-disable no-plusplus */
/**
 * 최댓값 만들기 (2)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120862
 *
 * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (numbers) => {
//   let max = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       max = j === 1 ? numbers[i] * numbers[j] : Math.max(max, numbers[i] * numbers[j]);
//     }
//   }
//   return max;
// };

// 다른 풀이
const solution = (numbers) => {
  const n = numbers.length;
  numbers.sort((a, b) => a - b);

  // 배열이 음수로 구성된 경우 정렬이 반대이므로, 양쪽 끝 두개의 곱을 비교
  return Math.max(
    numbers[0] * numbers[1],
    numbers[n - 1] * numbers[n - 2],
  );
};

const numbers = [-1, -10, -15, -20, -40];
console.log(solution(numbers));
