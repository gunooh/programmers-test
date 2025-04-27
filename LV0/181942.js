/**
 * 문자열 섞기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181942
 *
 * 길이가 같은 두 문자열 str1과 str2가 주어집니다.
 * 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (str1, str2) => [...str1].map((_, idx) => str1[idx] + str2[idx]).join('');

const str1 = 'aaaaa';
const str2 = 'bbbbb';
console.log(solution(str1, str2));
