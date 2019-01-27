/*Declare your age using a let variable as age is not constant*/
let myAge = 22;

/*The first 2 years of a Dog's life is equal to 10.5 human years*/
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

/*Now take off the first two years from myAge as the following years no longer = 10.5/yr*/
laterYears = myAge - 2;

/*Every year after the first two is equal to 4*/
laterYears *= 4;

/*Sum up both variable to find dog years*/
myAgeInDogYears = earlyYears + laterYears;

myName = "Felix Thompson".toLowerCase();


console.log(`My name is ${myName}. I am ${myAgeInDogYears} in dog years.`)