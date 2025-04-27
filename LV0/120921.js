/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/**
 * 문자열 밀기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120921
 *
 * 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
 * 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
 */

// 내 풀이
// const solution = (A, B) => {
//   if (A === B) return 0;

//   for (let i = 1; i < A.length; i++) {
//     A = A[A.length - 1] + A.slice(0, A.length - 1);

//     if (A === B) return i;
//   }

//   return -1;
// };

// 다른 풀이
const solution = (a, b) => (b + b).indexOf(a);

const A = 'hello';
const B = 'ohell';
console.log(solution(A, B));
