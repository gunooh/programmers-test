/**
 * 배열의 평균값
 * https://school.programmers.co.kr/learn/courses/30/lessons/120817
 *
 * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (numbers) => numbers.reduce((acc, cur) => acc + cur) / numbers.length;

const arr = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
console.log(solution(arr));
