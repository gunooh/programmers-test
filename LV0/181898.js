/**
 * 가까운 1 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181898
 *
 * 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
 * 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
 */

// 내 풀이
// const solution = (arr, n) => arr.findIndex((item, idx) => idx >= n && item === 1);

// 다른 풀이
// indexOf(searchElement, fromIndex)
// fromIndex => 검색을 시작할 인덱스
const solution = (arr, n) => arr.indexOf(1, n);

const arr = [0, 0, 0, 1];
const n = 1;
console.log(solution(arr, n));
