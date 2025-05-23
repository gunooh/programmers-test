/* eslint-disable no-plusplus */
/**
 * 삼각형의 완성조건 (2)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120868
 *
 * 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
 * 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (sides) => {
//   const [x, y] = sides;
//   let z;
//   let count = 0;

//   const max = Math.max(x, y);
//   const min = Math.min(x, y);

//   z = max;
//   while (min + z > max) {
//     z -= 1;
//     count += 1;
//   }

//   z = min + max - 1;
//   while (max < z) {
//     z -= 1;
//     count += 1;
//   }

//   return count;`
// };

// 다른 풀이
const solution = (sides) => Math.min(...sides) * 2 - 1;

const sides = [11, 7];
console.log(solution(sides));
