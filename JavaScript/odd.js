function odd()
{
    let a= document.getElementById('result');
    let evenNumbers = [];
    for (let i = 1; i <= 50; i++)
        {
            if (i % 2 === 0)
                {
                evenNumbers.push(i);
            }
    }
    a.innerHTML = `Even numbers from 1 to 50: ${evenNumbers.join('   ')}`;
    console.log(`Even numbers from 1 to 50: ${evenNumbers.join('      ')}`);
}


function Fibonacci() {
    let n = 10; // Number of terms in the Fibonacci series (you can change this value)
    let resultElement = document.getElementById('result');
    if (n <= 0)
        {
      resultElement.innerHTML = 'Please enter a positive number.';
      return;
    }
    let fibonacciSeries = [];
    let a = 0, b = 1;
    // Generate Fibonacci series
    for (let i = 0; i < n; i++)
        {
      fibonacciSeries.push(a); // Add the current number to the series
      let nextTerm = a + b; // Calculate the next term
      a = b; // Update a
      b = nextTerm; // Update b
    }
    // Display the series
    resultElement.innerHTML = `First ${n} terms of Fibonacci series: ${fibonacciSeries.join(', ')}`;
    console.log(`First ${n} terms of Fibonacci series: ${fibonacciSeries.join(', ')}`);
  }


  function checkPrime() {
    var number = document.getElementById('numberInput').value;
    var result = document.getElementById('result');
    // Check if number is a valid positive integer
    if (number <= 1 || isNaN(number))
        {
        result.innerHTML = "Please enter a valid positive integer greater than 1.";
        return;
    }
    // Check if the number is prime
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(number); i++)
        {
        if (number % i === 0)
            {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
        {
        result.innerHTML = number + " is a prime number!";
        result.style.color = "green";
    }
    else
    {
        result.innerHTML = number + " is not a prime number.";
        result.style.color = "red";
    }
}


let sum = 0;
for (let i = 15; i <= 25; i++) {
    sum += i;
}
console.log("The sum of numbers from 15 to 25 is: " + sum);