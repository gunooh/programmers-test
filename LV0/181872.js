/**
 * 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181872
 *
 * 문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (myString, pat) => {
  const idx = myString.lastIndexOf(pat);

  return myString.slice(0, idx + pat.length);
};

const myString = 'abcde';
const pat = 'de';
console.log(solution(myString, pat));
