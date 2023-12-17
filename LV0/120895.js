/* eslint-disable camelcase */
/**
 * 인덱스 바꾸기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120895
 *
 * 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 */

// 내 풀이
// const solution = (my_string, num1, num2) => {
//   const arr = [...my_string];
//   arr.splice(num2, 1, arr.splice(num1, 1, my_string[num2])[0]);
//   return arr.join('');
// };

// 다른 풀이
const solution = (my_string, num1, num2) => {
  const arr = [...my_string];
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join('');
};

const my_string = 'I love you';
const num1 = 3;
const num2 = 6;
console.log(solution(my_string, num1, num2));
