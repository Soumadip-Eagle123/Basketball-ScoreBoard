let num1 = 0;
let num2 = 0;
function add1(){
    num1++;
    document.getElementById("home").innerText=num1;
}
function add2(){
    num1+=2;
    document.getElementById("home").innerText=num1;
}
function add3(){
    num1+=3;
    document.getElementById("home").innerText=num1;
}
function Add1(){
    num2+=1;
    document.getElementById("guest").innerText=num2;
}
function Add2(){
    num2+=2;
    document.getElementById("guest").innerText=num2;
}
function Add3(){
    num2+=3;
    document.getElementById("guest").innerText=num2;
}
function reset(){
    document.getElementById("home").innerText=0;
    document.getElementById("guest").innerText=0;
}
function showWinner() {
    let homeBox = document.querySelector(".box1");
    let guestBox = document.querySelector(".box2");

    let homeScore = Number(document.getElementById("home").innerText);
    let guestScore = Number(document.getElementById("guest").innerText);

    // Case 1: Home wins
    if (homeScore > guestScore) {
        homeBox.classList.add("flash");
        setTimeout(() => homeBox.classList.remove("flash"), 500);
    }

    // Case 2: Guest wins
    else if (guestScore > homeScore) {
        guestBox.classList.add("flash");
        setTimeout(() => guestBox.classList.remove("flash"), 500);
    }

    // Case 3: Tie
    else {
        alert("It's a tie!");
    }
}
