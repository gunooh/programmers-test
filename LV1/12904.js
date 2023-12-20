/* eslint-disable no-bitwise */
/**
 * 가운데 글자 가져오기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12904
 *
 * 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 */

// 내 풀이
const solution = (s) => {
  if (s.length % 2 === 0) {
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  }
  return s.charAt(~~(s.length / 2));
};

// 다른 풀이
// const solution = (s) => s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);

const s = 'abcde';
console.log(solution(s));
