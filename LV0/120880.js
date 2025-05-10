/* eslint-disable no-plusplus */
/**
 * 특이한 정렬
 * https://school.programmers.co.kr/learn/courses/30/lessons/120880
 *
 * 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
 * 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
 * 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
 *
 */

const solution = (numlist, n) => numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a);

const numlist = [1, 2, 3, 4, 5, 6];
const n = 4;

console.log(solution(numlist, n));
