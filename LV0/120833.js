/**
 * 배열 자르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120833
 *
 * 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (numbers, num1, num2) => numbers.slice(num1, num2 + 1);

const numbers = [1, 3, 5];
const num1 = 1;
const num2 = 2;
console.log(solution(numbers, num1, num2));
