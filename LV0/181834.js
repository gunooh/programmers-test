/**
 * l로 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181834
 *
 * 알파벳 소문자로 이루어진 문자열 myString이 주어집니다.
 * 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.
 *
 */

// 내 풀이
const solution = (myString) => [...myString].map((item) => (item.charCodeAt() < 108 ? 'l' : item)).join('');

// 다른 풀이 1
// const solution = (myString) => myString.replace(/[a-k]/g, 'l');

// 다른 풀이 2
// 알파벳끼리도 대소 비교가 가능함
// const solution = (myString) => [...myString].map((item) => (item < 'l' ? 'l' : item)).join('');

const myString = 'jjnnllkkmm';
console.log(solution(myString));
