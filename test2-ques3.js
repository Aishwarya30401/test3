function secondLargest(array) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of array) {
      const num = Number(value)
  
      if (num > max) {
        [result, max] = [max, num] 
      } else if(num < max && num > result) {
        result = num; 
      }
    }
  
    return result;
  }
  
  const array = ['12','35','1','10','34','1'];
  console.log(secondLargest(array));