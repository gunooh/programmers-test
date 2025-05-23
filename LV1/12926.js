/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/**
 * 시저 암호
 * https://school.programmers.co.kr/learn/courses/30/lessons/12926
 *
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
 * 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
 * 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 */

// 내 풀이
// const solution = (s, n) => {
//   const arr = [...s].map((item) => item.charCodeAt());
//   return arr.map((item) => {
//     if (item === 32) return String.fromCharCode(item);

//     if ((item <= 90 && item + n > 90) || (item >= 97 && item + n > 122)) {
//       item -= 26;
//     }

//     return String.fromCharCode(item += n);
//   }).join('');
// };

// 다른 풀이
const solution = (s, n) => s.replace(/([a-z])|([A-Z])/g, (match, lowerCase) => {
  const startCode = lowerCase ? 'a'.charCodeAt() : 'A'.charCodeAt();
  return String.fromCharCode(((match.charCodeAt() - startCode + n) % 26) + startCode);
});

const s = 'a B z';
const n = 4;
console.log(solution(s, n));
