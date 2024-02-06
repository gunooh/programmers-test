/* eslint-disable no-shadow */
/* eslint-disable default-case */
/* eslint-disable no-plusplus */
/**
 * 주사위 게임 2
 * https://school.programmers.co.kr/learn/courses/30/lessons/181930
 *
 * 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
 * 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
 * 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
 * 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
 * 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
 */

// 내 풀이
// const solution = (a, b, c) => {
//   if (a === b && b === c && c === a) {
//     return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
//   }
//   if ((a === b && b !== c) || (a === c && a !== b) || (b === c && a !== b)) {
//     return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
//   }
//   return a + b + c;
// };

// 다른 풀이
const solution = (a, b, c) => {
  const calculate = (arr, n) => {
    const [a, b, c] = arr;
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= (a ** i + b ** i + c ** i);
    }

    return result;
  };

  const arr = [a, b, c];
  const set = new Set(arr);

  return calculate(arr, arr.length + 1 - set.size);
};

const a = 2;
const b = 6;
const c = 1;
console.log(solution(a, b, c));
