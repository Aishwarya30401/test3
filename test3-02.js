
 const  N = 13;
 const M = 4;
 function Num(N, M)
 {
     let quotient = parseInt(N / M);
     let num1 = M * quotient;
     let num2 = (N * M) > 0 ?
         (M* (quotient + 1)) : (M * (quotient - 1));
     if (Math.abs(N - num1) < Math.abs(N - num2))
         return num1;
     return num2;
 }
 
 console.log(Num(N,M));