/* eslint-disable camelcase */
/**
 * 공백으로 구분하기 2
 * https://school.programmers.co.kr/learn/courses/30/lessons/181868
 *
 * 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string) => my_string.match(/\w+/g);

const my_string = ' i    love  you';
console.log(solution(my_string));
