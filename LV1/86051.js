/**
 * 없는 숫자 더하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/86051
 *
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
const solution = (numbers) => {
  const arr = Array(10).fill().map((_, idx) => idx);

  numbers.forEach((item) => {
    const idx = arr.indexOf(item);
    arr.splice(idx, 1);
  });

  return arr.reduce((acc, cur) => acc + cur);
};

// 다른 풀이
// const solution = (numbers) => 45 - numbers.reduce((acc, cur) => acc + cur);

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers));
