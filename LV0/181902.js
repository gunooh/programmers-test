/* eslint-disable no-plusplus */
/* eslint-disable no-unreachable-loop */
/* eslint-disable camelcase */
/**
 * 문자 개수 세기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181902
 *
 * 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서
 * 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를
 * 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string) => {
  const arr = Array(52).fill(0);

  for (const char of my_string) {
    if (char >= 'A' && char <= 'Z') {
      arr[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    if (char >= 'a' && char <= 'z') {
      arr[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
    }
  }

  return arr;
};

const my_string = 'Programmers';
console.log(solution(my_string));
