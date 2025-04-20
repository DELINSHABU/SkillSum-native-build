const startBtn = document.getElementById('startBtn');

console.log('Script loaded successfully!');

startBtn.addEventListener('click', function() {
    console.log("It's clicked");
    document.getElementById('mainSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'flex';
    document.getElementById('optionsSection').style.display = 'flex';
    GenrateQuestion()
}); 





//? Logic for the game

//? getting the elements from the DOM
let Fno = document.getElementById('FirstNumber');
// console.log(Fno);
let Sno = document.getElementById('SecNumber');
// console.log(Sno);
let Ano = document.getElementById('AnswerNumber');
// console.log(Ano);
let option01 = document.getElementById('option1');
// console.log(option01);
let option02 = document.getElementById('option2');
// console.log(option02);
let option03 = document.getElementById('option3');
// console.log(option03);
let option04 = document.getElementById('option4');
// console.log(option04.textContent);





function RandomNumber(high, low) {
    return Math.floor(Math.random() * high) + low;
  }

let Answer; // Declare Answer in broader scope

function GenrateQuestion(){
    
    //? Generate two random numbers between 10 and 15
    const num1 = RandomNumber(15, 10);
    const num2 = RandomNumber(15, 10);
    Answer = num1 + num2;
    console.log(num1+"+"+num2+"="+Answer);
    Fno.innerHTML = num1;
    Sno.innerHTML = num2;
    // Ano.innerHTML = Answer;

    //? Generate Options for the answer


    // RandomNumber(3, 0);

    let  generateOption01 = RandomNumber(5,0) 
    let  generateOption02 = RandomNumber(5,0) 
    let  generateOption03 = RandomNumber(5,0) 
    let options = [];
    // First option is always the correct answer
    options.push(Answer);

    // Generate unique wrong options
    while (options.length < 4) {
        let wrongAnswer = Answer + generateOption01 - generateOption02 + generateOption03;
        if (!options.includes(wrongAnswer) && wrongAnswer !== Answer) {
            options.push(wrongAnswer);
        } else {
            // If duplicate, adjust the value slightly
            wrongAnswer += RandomNumber(5, 1);
            if (!options.includes(wrongAnswer)) {
                options.push(wrongAnswer);
            }
        }
    }

    // Shuffle the options array
    options = options.sort(() => Math.random() - 0.5);


    // options = [];
    //  console.log(options);
    option01.textContent = options[0];
    option02.textContent = options[1];
    option03.textContent = options[2];
    option04.textContent = options[3];
    option01.textContent;
    option02.textContent;
    option03.textContent;
    option04.textContent;





}

const RForEach = document.getElementById('ResultForEach')

function optionFun(){
    RForEach.style.display ="flex"
    // Ano.innerHTML = Answer;
    setTimeout(()=>{
        RForEach.style.display ="none"
        Ano.innerHTML = "?";
    },700)
    setTimeout(() => {
        GenrateQuestion();
    }, 1500);
}

option01.addEventListener("click", ()=>{
    optionFun()
    Ano.innerHTML = option01.innerHTML;
} )
option02.addEventListener("click", ()=>{
    optionFun()
    Ano.innerHTML = option02.innerHTML;
} )
option03.addEventListener("click", ()=>{
    optionFun()
    Ano.innerHTML = option03.innerHTML;
} )
option04.addEventListener("click", ()=>{
    optionFun()
    Ano.innerHTML = option04.innerHTML;
} )