/* eslint-disable no-plusplus */
/**
 * 구슬을 나누는 경우의 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120840
 *
 * 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
 * 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 */

// 시간 초과..
// const solution = (balls, share) => {
//   const results = [];
//   const recursive = (arr, combination = []) => {
//     if (combination.length === share) {
//       results.push(combination);
//       return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       recursive(arr.slice(i + 1), combination.concat(arr[i]));
//     }
//   };

//   const arr = Array.from({ length: balls }, (_, index) => index + 1);

//   recursive(arr);

//   return results.length;
// };

const solution = (balls, share) => {
  // const factorial = (n) => {
  //   let result = 1;
  //   for (let i = 1; i <= n; i++) {
  //     result *= i;
  //   }
  //   return result;
  // };

  // reduce를 이용한 팩토리얼 함수 구현
  // const factorial = (n) => Array.from({ length: n }, (_, idx) => idx + 1).reduce((acc, cur) => acc * cur, 1);

  // 재귀를 이용한 팩토리얼 함수 구현
  const factorial = (n) => {
    if (n === 1) {
      return 1;
    }
    return factorial(n - 1) * n;
    // n = 5 ~ 2까지 스택에 쌓임. n = 1이 되면 1을 리턴
    // n = 2 -> 1 * 2;
    // n = 3 -> (1 * 2) * 3
    // n = 4 -> (1 * 2 * 3) * 4
    // n = 5 -> (1 * 2 * 3 * 4) * 5
  };
  console.log(factorial(5));

  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
};

const balls = 30;
const share = 10;
console.time('걸린 시간');
console.log(solution(balls, share));
console.timeEnd('걸린 시간');
