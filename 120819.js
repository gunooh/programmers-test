/* eslint-disable no-bitwise */
/* eslint-disable dot-notation */
/* eslint-disable consistent-return */
/**
 * 아이스 아메리카노
 * https://school.programmers.co.kr/learn/courses/30/lessons/120819
 *
 * 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다.
 * 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

// 내 풀이
const solution = (money) => {
  const PRICE = {
    AMERICANO: 5500,
  };

  const amount = ~~(money / PRICE['AMERICANO']);
  const change = money - (amount * PRICE['AMERICANO']);

  console.log(money / 5500);
  console.log(money % 5500);

  return [amount, change];
};

// // 다른 풀이
// const solution = (money) => [~~(money / 5500), money % 5500];

const money = 67830;
console.log(solution(money));
