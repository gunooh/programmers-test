/* eslint-disable camelcase */
/**
 * 배열 만들기 5
 * https://school.programmers.co.kr/learn/courses/30/lessons/181912
 *
 * 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다.
 * 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다.
 * 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (intStrs, k, s, l) => intStrs.map((item) => item.slice(s, s + l)).map(Number).filter((item) => item > k);

const intStrs = ['0123456789', '9876543210', '9999999999999'];
const k = 50000;
const s = 5;
const l = 5;
console.log(solution(intStrs, k, s, l));
