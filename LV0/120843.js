/**
 * 공 던지기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120843
 *
 * 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
 * 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (numbers, k) => numbers[((k - 1) * 2) % numbers.length];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 9;
console.log(solution(numbers, k));
