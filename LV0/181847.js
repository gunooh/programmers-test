/* eslint-disable camelcase */
/**
 * 0 떼기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181847
 *
 * 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
const solution = (n_str) => n_str.replace(/^0+/, '');

// 다른 풀이
// const solution = (n_str) => String(Number(n_str));

const n_str = '00854020';
console.log(solution(n_str));
