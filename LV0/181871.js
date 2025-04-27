/**
 * 문자열이 몇 번 등장하는지 세기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181871
 *
 * 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (myString, pat) => {
  const matches = myString.match(new RegExp(`(?=${pat})`, 'g'));
  return matches ? matches.length : 0;
};

const myString = 'banana';
const pat = 'ana';
console.log(solution(myString, pat));
