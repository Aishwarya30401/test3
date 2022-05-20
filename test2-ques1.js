

var prime=(number)=>
{
    for(var i = 2; i < number; i++)
    {
      if(number % i === 0)
      {
        return 'this is not a prime number';
      }
    }
    return 'this is prime number';  
  }
console.log(prime(23))