
// 1.Sorunun Cevabı
function findPrime(...numbers) {

  for (let i = 0; i < numbers.length; i++) {

    let counter=0

    for (let j = 1; j <=numbers[i]; j++) {

    if(numbers[i] % j==0){

    counter++

    }
      
    }

    if(counter==2){

      console.log(numbers[i]+" sayı asaldır.")

    }

    else {

      console.log(numbers[i]+" sayı asal değildir.")

    }

  }
  
}
findPrime(2,5,8,21, 13) 
findPrime(3,5)


// 2.Sorunun Cevabı
function sumDivisor(num){
    let divisorSum = 0
    for (let i = 1; i < num; i++) {
        if(num % i == 0){
            divisorSum += i 
        }      
    }
    return divisorSum

}

function friendNumbers(num1,num2){
    let num1Div = sumDivisor(num1)
    let num2Div = sumDivisor(num2)
    if((num1 == num1Div && num2 == num2Div) || (num2 == num1Div && num1 == num2Div) ){
        console.log(num1  + " ve " + num2 + " arkadaş sayılardır.")
    }
    else{
        console.log(num1  + " ve " + num2 + " arkadaş sayılar değildir.")
    } 
}

friendNumbers(220,284)
friendNumbers(2620, 2924)


// 3.Sorunun Cevabı
function sumDivisorForPerfectNumber(num){
    let divisorSum = 0
    for (let i = 1; i <= num; i++) {
        if(num % i == 0){
            divisorSum += i 
        }      
    }

    return divisorSum

}

function findPerfectNumber(number){

    for (let i = 0; i < number; i++) {
        let sumPerfect = sumDivisorForPerfectNumber(i)
        if ((sumPerfect == 2*i) && i >= 2) {

            console.log( i + " mükemmel sayıdır.")
            
        }
        
    }

}

findPerfectNumber(1000)


// 4.Sorunun Cevabı
function findPrime2(number) {

  for (let i = 0; i < number; i++) {

    let counter=0

    for (let j = 1; j <= i; j++) {

    if(i % j==0){

    counter++

    }   

    }

    if(counter==2){

      console.log(i +" sayı asaldır.")

    }

  }
  
}

findPrime2(1000)