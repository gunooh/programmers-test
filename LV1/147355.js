/* eslint-disable no-plusplus */
/**
 * 크기가 작은 부분문자열
 * https://school.programmers.co.kr/learn/courses/30/lessons/147355
 *
 * 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
 * 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.
 */

// 내 풀이
// const solution = (t, p) => {
//   const arr = [];
//   for (let i = 0; i < t.length - p.length + 1; i++) {
//     let str = '';
//     for (let j = 0; j < p.length; j++) {
//       str += t[i + j];
//     }
//     arr.push(str);
//   }
//   return arr.filter((item) => Number(item) <= p).length;
// };

// 다른 풀이
const solution = (t, p) => {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const value = t.slice(i, i + p.length);
    if (Number(value) <= Number(p)) {
      count += 1;
    }
  }
  return count;
};

const t = '3141592';
const p = '271';
console.log(solution(t, p));
