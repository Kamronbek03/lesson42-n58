// Uyga vazifa //
// Function //

// N1 //
// function power(a, n) {
//   var c = a ** n;
//   console.log(c);
// }
// power(3, 5);

// N2 //
// function mean(a, b) {
//   var c = (a + b) / 2;
//   var d = (a * b) ** (1 / 2);
//   console.log(c, d);
// }
// mean(12, 48);

// N3 //
// function sign(n) {
//   if (n > 0) {
//     console.log(1);
//   } else if (n < 0) {
//     console.log(-1);
//   } else {
//     console.log(0);
//   }
// }
// sign(10);

// N4 //
// function numberOfRoots(A, B, C) {
//   var D = B ** 2 - 4 * A * C;
//   if (D > 0) {
//     console.log(2);
//   } else if (D < 0) {
//     console.log(0);
//   } else {
//     console.log(1);
//   }
// }
// numberOfRoots(1, -6, 9);

// N5 //
// function areaCircle(R) {
//   var S = Math.PI * R ** 2;
//   console.log(S);
// }
// areaCircle(5);

// N6 //
// function sumRange(A, B) {
//   var s = 0;
//   if (A < B) {
//     for (let i = A; i <= B; i++) {
//       s += i;
//     }
//     console.log(s);
//   } else if (A > B) {
//     console.log(0);
//   }
// }
// sumRange(8, 10);

// N7 //
// function calc(A, B, S) {
//   var d = 0;
//   if (S === "+") {
//     d = A + B;
//     console.log(d);
//   } else if (S === "-") {
//     d = A - B;
//     console.log(d);
//   } else if (S === "*") {
//     d = A * B;
//     console.log(d);
//   } else if (S === "/") {
//     d = A / B;
//     console.log(d);
//   }
// }
// calc(10, 15, "*");
// calc(7, 8, "+");

// N8 //
// function isEven(K) {
//   console.log(K % 2 === 0);
// }
// isEven(10);

// N9 //
// function sortABC(a, b, c) {
//   var min = Math.min(a, b, c);
//   var max = Math.max(a, b, c);
//   var orta = a + b + c - min - max;
//   console.log(min, orta, max);
// }
// sortABC(10, 5, 8);

// N10 //
// function isPowerN(K, N) {
//   while (N <= K) {
//     K /= N;
//   }
//   console.log(K === 1);
// }
// isPowerN(10, 2);

// N11 //
// function isPrime(N) {
//   var s = 0;
//   var a = (N - (N % 2)) / 2;
//   for (let i = 1; i <= a; i++) {
//     if (N % i === 0) {
//       s += 1;
//     }
//   }
//   console.log(s === 1);
// }
// isPrime(7);

// N12 //
// function numberOfPrime(N) {
//   var b = 0;
//   for (let i = 2; i <= N; i++) {
//     var s = 0;
//     var a = (i - (i % 2)) / 2;
//     for (let j = 1; j <= a; j++) {
//       if (i % j === 0) {
//         s += 1;
//       }
//     }
//     if (s === 1) {
//       b += 1;
//     }
//   }
//   console.log(b);
// }
// numberOfPrime(10);

// N13 //
// function digitNth(K, N) {
//   var k = K;
//   var s = 1;
//   while (k >= 10) {
//     k = (k - (k % 10)) / 10;
//     s += 1;
//   }
//   if (s >= N) {
//     let a = 10 ** (s - N);
//     var b = ((K % (a * 10)) - (K % a)) / a;
//     console.log(b);
//   } else {
//     console.log(-1);
//   }
// }
// digitNth(105782, 5);
// digitNth(1057, 5);

// N14 //
// function inverseNumber(N) {
//   var a = 0;
//   while (N > 0) {
//     if (N >= 10) {
//       a *= 10;
//       a += N % 10;
//       N = (N - (N % 10)) / 10;
//     } else {
//       a *= 10;
//       a += N;
//       N = N - (N % 10);
//     }
//   }
//   console.log(a);
// }
// inverseNumber(56814);

// N15 //
// function isPalindrom(N) {
//   var s = N;
//   var a = 0;
//   while (N > 0) {
//     if (N >= 10) {
//       a *= 10;
//       a += N % 10;
//       N = (N - (N % 10)) / 10;
//     } else {
//       a *= 10;
//       a += N;
//       N = N - (N % 10);
//     }
//   }
//   console.log(a === s);
// }
// isPalindrom(1678761);
