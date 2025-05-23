/**
 * 배열 원소의 길이
 * https://school.programmers.co.kr/learn/courses/30/lessons/120854
 *
 * 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
 */

const solution = (strlist) => strlist.map((str) => str.length);

const strlist = ['We', 'are', 'the', 'world!'];
console.log(solution(strlist));
