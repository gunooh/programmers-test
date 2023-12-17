/**
 * 한 번만 등장한 문자
 * https://school.programmers.co.kr/learn/courses/30/lessons/120896
 *
 * 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
 */

// 내 풀이
// const solution = (s) => {
//   const map = [...s].reduce((acc, cur) => {
//     if (!acc[cur]) {
//       acc[cur] = 1;
//     } else {
//       acc[cur] += 1;
//     }

//     return acc;
//   }, {});

//   return Object.entries(map).filter((item) => item[1] === 1).map((item) => item[0]).sort()
//     .join('');
// };

// 다른 풀이
const solution = (s) => {
  const result = [];
  for (const str of s) {
    if (s.indexOf(str) === s.lastIndexOf(str)) result.push(str);
  }
  return result.sort().join('');
};

const s = 'hello';
console.log(solution(s));
