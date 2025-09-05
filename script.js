//VARIABLE DECLARATIONS AND CONDITIONALS
//if
var p=5;
if(p <= 5){
    console.log("The value of p is 5")
}

//if/else
let a=6
if(a < 6){
    console.log("a is less than 6")
}
    else if(a==6){
        console.log("a=6")
    }
    else{
        console.log("a is greater than 6")
    }

//FUNCTIONS
//example 1
function add(num1,num2){
    console.log(num1 + num2)
}
add(5,6)

//example 2
function faveColor(color){
    console.log("My favourite color is "+ color)
}
faveColor("purple")

//LOOPS
//for
for(let i=0; i<=10; i++){
    console.log("The number is " + i)
}

//while
let b=8;
while(b<=12){
    console.log(b);
    b++;
}

//DOM
function change(){
    let body=document.getElementById('body')
    let h1=document.getElementById('head')
    let p=document.getElementById('text')
    let button=document.getElementById('btn')

    body.style.backgroundColor="orchid"
    body.style.fontStyle="bolder"
    head.textContent="This is a new heading"
    head.style.color="red"
    text.style.textDecoration="underline"
    text.style.fontSize="20px"
    text.style.color="white"
    btn.style.border="2px solid yellow"
}