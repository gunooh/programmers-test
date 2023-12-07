/**
 * 짝수의 합
 * https://school.programmers.co.kr/learn/courses/30/lessons/120847
 *
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (numbers) => {
//   const x = Math.max(...numbers);

//   numbers.splice(numbers.indexOf(x), 1);

//   const y = Math.max(...numbers);

//   return x * y;
// };

// 다른 풀이
const solution = (numbers) => {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
};

const numbers = [0, 31, 24, 10, 1, 9];
console.log(solution(numbers));
