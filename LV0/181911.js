/* eslint-disable camelcase */
/**
 * 부분 문자열 이어 붙여 문자열 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181911
 *
 * 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다.
 * parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다.
 * 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

// const solution = (my_strings, parts) => my_strings.map((string, idx) => string.slice(parts[idx][0], parts[idx][1] + 1)).join('');
const solution = (my_strings, parts) => parts.map(([start, end], idx) => my_strings[idx].slice(start, end + 1)).join('');

const my_strings = ['progressive', 'hamburger', 'hammer', 'ahocorasick'];
const parts = [[0, 4], [1, 2], [3, 5], [7, 7]];
console.log(solution(my_strings, parts));
