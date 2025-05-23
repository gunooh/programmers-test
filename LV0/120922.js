/**
 * 종이 자르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120922
 *
 * 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
 * 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.
 */

// 내 풀이
// const solution = (M, N) => {
//   const [max, min] = [M, N].sort((a, b) => b - a);
//   return (min - 1) + ((max - 1) * min);
// };

// 다른 풀이
const solution = (M, N) => M * N - 1;

const M = 2;
const N = 5;
console.log(solution(M, N));
