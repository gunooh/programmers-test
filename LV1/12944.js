/**
 * 평균 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12944
 *
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 */

const solution = (arr) => arr.reduce((acc, cur) => acc + cur) / arr.length;

const arr = [1, 2, 3, 4];
console.log(solution(arr));
