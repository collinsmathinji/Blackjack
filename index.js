let hasBlackJack = false;
let isAlive = false
let messageEl = document.getElementById("message-el");
let card1El = document.getElementById("card1-el");
let card2El = document.getElementById("card2-el");
let card3El = document.getElementById("card3-el");
let sumEl = document.getElementById("sum-el");
let cardsEl=document.getElementById("card-el")


function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rand(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ran(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function ra(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function r(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstCard = random(1, 13);
let secondCard = rand(1, 13);
let thirdCard = ran(1, 13);
let fourthCard=ra(1,13)
function begin(){
  var sum = firstCard + secondCard
  sumEl.textContent="Sum:"+sum
  if(sum<21){
    hasBlackJack = false
    messageEl.textContent="Try another card"}
 else if(sum==21){
    hasBlackJack ==false
    messageEl.textContent="You won";
}
else if(sum>21){
    hasBlackJack = false
    messageEl.textContent="You are definately a failure "
    isAlive ==false
  }
  
  if (firstCard===1) {
    document.getElementById("front-el1").src = "./img/ace.png";
  } else if (firstCard===2) {
    document.getElementById("front-el1").src = "./img/2.png";
  } else if (firstCard===3) {
    document.getElementById("front-el1").src = "./img/3.png";
  } else if (firstCard===4) {
    document.getElementById("front-el1").src = "./img/4.png";
  } else if (firstCard===5) {
    document.getElementById("front-el1").src = "./img/5.png";
  } else if (firstCard===6) {
    document.getElementById("front-el1").src = "./img/6.png";
  } else if (firstCard===7) {
    document.getElementById("front-el1").src = "./img/7.png";
  } else if (firstCard===8) {
    document.getElementById("front-el1").src = "./img/8.png";
  } else if (firstCard===9) {
    document.getElementById("front-el1").src = "./img/9.png";
  } else if (firstCard===10) {
    document.getElementById("front-el1").src = "./img/10.png";
  } else if (firstCard===11) {
    document.getElementById("front-el1").src = "./img/j.png";
  } else if (firstCard===12) {
    document.getElementById("front-el1").src = "./img/k.png";
  } else if (firstCard===13) {
    document.getElementById("front-el1").src = "./img/q.png";
  }
  if (secondCard==1) {
    document.getElementById("front-el2").src = "./img/ace.png";
  } else if (secondCard===2) {
    document.getElementById("front-el2").src = "./img/2.png";
  } else if (secondCard ===3) {
    document.getElementById("front-el2").src = "./img/3.png";
  } else if (secondCard===4) {
    document.getElementById("front-el2").src = "./img/4.png";
  } else if (secondCard===5) {
    document.getElementById("front-el2").src = "./img/5.png";
  } else if (secondCard===6) {
    document.getElementById("front-el2").src = "./img/6.png";
  } else if (secondCard===7) {
    document.getElementById("front-el2").src = "./img/7.png";
  } else if (secondCard===8) {
    document.getElementById("front-el2").src = "./img/8.png";
  } else if (secondCard===9) {
    document.getElementById("front-el2").src = "./img/9.png";
  } else if (secondCard===10) {
    document.getElementById("front-el2").src = "./img/10.png";
  } else if (secondCard==11) {
    document.getElementById("front-el2").src = "./img/j.png";
  } else if (secondCard==12) {
    document.getElementById("front-el2").src = "./img/k.png";
  } else if (secondCard==13) {
    document.getElementById("front-el2").src = "./img/q.png";
  }
}
function ml(){
     if (thirdCard===1) {
      document.getElementById("front-el3").src = "./img/ace.png";
    } else if (thirdCard===2) {
      document.getElementById("front-el3").src = "./img/2.png";
    } else if (thirdCard===3) {
      document.getElementById("front-el3").src = "./img/3.png";
    } else if (thirdCard===4) {
      document.getElementById("front-el3").src = "./img/4.png";
    } else if (thirdCard==5){
      document.getElementById("front-el3").src = "./img/5.png";
    } else if (thirdCard==6){
      document.getElementById("front-el3").src = "./img/6.png";
    } else if (thirdCard==7){
      document.getElementById("front-el3").src = "./img/7.png";
    } else if (thirdCard==8){
      document.getElementById("front-el3").src = "./img/8.png";
    } else if (thirdCard==9){
      document.getElementById("front-el3").src = "./img/9.png";
    } else if (thirdCard==10) {
      document.getElementById("front-el3").src = "./img/10.png";
    } else if (thirdCard==11) {
      document.getElementById("front-el3").src = "./img/j.png";
    } else if (thirdCard==12) {
      document.getElementById("front-el3").src = "./img/k.png";
    } else if (thirdCard==13) {
      document.getElementById("front-el3").src = "./img/q.png";
    }
    var sum = firstCard + secondCard+thirdCard
    sumEl.textContent="Sum:"+sum
    if(sum<21){
      hasBlackJack = false
      messageEl.textContent="we are sorry,you ran out of cards"
  }
   else if(sum==21){
      hasBlackJack ==false
      messageEl.textContent="You won";
  }
  else if(sum>21){
      hasBlackJack = false
      messageEl.textContent="You are definately a failure "
      isAlive ==false
    }
  }

