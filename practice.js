// Problem 1

var fruits = ['Apple', 'Banana', 'Orange'];
var find = fruits.indexOf('Banana');
console.log(find);
fruits[1] = 'Mango';
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

// Problem 2
var myScore = 85;
var tomScore = 66;
var janesScore = 95;
var peterScore = 56;
var johnsScore = 40;
// My Grade
if(myScore >= 80){
    console.log('I Get A')
}
else if(myScore >= 60){
    console.log('I Get B')
}
else if(myScore >= 50){
    console.log('I Get C')
}
else if(myScore >= 40){
    console.log('I Get D')
}
else{
    console.log('I Get F')
}
// Tom Grade 
if(tomScore >= 80){
    console.log('Tom Get A')
}
else if(tomScore >= 60){
    console.log('Tom Get B')
}
else if(tomScore >= 50){
    console.log('Tom Get C')
}
else if(tomScore >= 40){
    console.log('Tom Get D')
}
else{
    console.log('Tom Get F')
}
// Tom Grade 
if(janesScore >= 80){
    console.log('Janes Get A')
}
else if(janesScore >= 60){
    console.log('Janes Get B')
}
else if(janesScore >= 50){
    console.log('Janes Get C')
}
else if(janesScore >= 40){
    console.log('Janes Get D')
}
else{
    console.log('Janes Get F')
}

// Problem 3

var num1 = 113;
var num2 = 79;
var num3 = 45;

if(num1 > num2 && num1 > num3){
    console.log(num1)
}
else if (num2 > num1 && num2 > num3 ){
    console.log(num2)
}
else{
    console.log(num3)
}
// 
var side1 = 19;
var side2 = 8;
var side3 = 19;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('This is Isosceles')
}
else{
    console.log('This is  not Isosceles')
}

console.log(6>= 6)