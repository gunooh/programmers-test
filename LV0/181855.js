/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/**
 * 문자열 묶기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181855
 *
 * 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
 */

// const solution = (strArr) => {
//   const obj = strArr.reduce((acc, cur) => {
//     const len = cur.length;
//     acc[len] = (acc[len] || 0) + 1;
//     return acc;
//   }, {});

//   return Math.max(...Object.values(obj));
// };

const solution = (strArr) => {
  const map = new Map();

  for (const str of strArr) {
    map.set(str.length, (map.get(str.length) || 0) + 1);
  }

  return Math.max(...map.values());
};

const strArr = ['a', 'bc', 'd', 'efg', 'hi'];
console.log(solution(strArr));
