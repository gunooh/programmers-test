/* eslint-disable no-plusplus */
/**
 * 직사각형 별찍기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12969
 *
 * 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
 * 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
 */

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]); // 가로
  const b = Number(n[1]); // 세로

  // 내 풀이
  // for (let i = 1; i <= b; i++) {
  //   let star = '';
  //   for (let j = 1; j <= a; j++) {
  //     star += '*';
  //     if (j === a) {
  //       console.log(star);
  //       break;
  //     }
  //   }
  // }

  // 다른 풀이
  const row = '*'.repeat(a);
  for (let i = 1; i <= b; i++) {
    console.log(row);
  }
});
