/**
 * x 사이의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/181867
 *
 * 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (myString) => myString.split('x').map((item) => item.length);

const myString = 'oxooxoxxox';
console.log(solution(myString));
