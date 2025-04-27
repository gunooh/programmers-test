/* eslint-disable camelcase */
/**
 * 문자열 겹쳐쓰기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181943
 *
 * 문자열 my_string, overwrite_string과 정수 s가 주어집니다.
 * 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

// 내 풀이
const solution = (my_string, overwrite_string, s) => {
  const result = [...my_string].map((item, i) => {
    const findItem = [...overwrite_string].find((_, j) => i === j + s);

    return findItem || item;
  }).join('');

  return result;
};

// 다른 풀이
// const solution = (my_string, overwrite_string, s) => my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);

const my_string = 'He11oWor1d';
const overwrite_string = 'lloWorl';
const s = 2;
console.log(solution(my_string, overwrite_string, s));
