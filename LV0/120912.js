/**
 * 7의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120912
 *
 * 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
 */

// 내 풀이
// const solution = (array) => array.map((item) => [...String(item)]).reduce((acc, cur) => acc + cur.filter((item) => item === '7').length, 0);

// 다른 풀이
const solution = (array) => array.join('').split(7).length - 1;

const array = [777, 77, 17];
console.log(solution(array));
