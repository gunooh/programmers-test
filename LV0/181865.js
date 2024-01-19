/* eslint-disable consistent-return */
/* eslint-disable default-case */
/**
 * 간단한 식 계산하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181865
 *
 * 문자열 binomial이 매개변수로 주어집니다.
 * binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
 */

// 내 풀이
const solution = (binomial) => {
  const [x, operator, y] = binomial.split(' ');

  switch (operator) {
    case '+':
      return Number(x) + Number(y);
    case '-':
      return Number(x) - Number(y);
    case '*':
      return Number(x) * Number(y);
  }
};

const binomial = '43 + 12';
console.log(solution(binomial));
