let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomp = () =>{
    const options = ["rock","paper","scisor"];
   const randidx = Math.floor(Math.random() * 3);
   return options[randidx]
    //rock paper scisoor

}

const drawgame = () =>{
console.log("game is draw")
 msg.innerText = "game is draw! play again";
     msg.style.backgroundColor = "#081b31";
}

//computer choice k liye
const playgame = (userchoice) =>{
console.log("user choice = ", userchoice)
//generate userchoice ->modular 
const compchoice = gencomp();
console.log("comp choice =", compchoice);

const showWinner = (userwin , userchoice ,compchoice) => {
    if(userwin){
       userscore++; 
userscorepara.innerText = userscore
    console.log("you win")
    msg.innerText = `you win! Your ${userchoice} beats ${compchoice} `;
    msg.style.backgroundColor = "green";
 
    } else{
        compscore++;
        compscorepara.innerText = userscore
        console.log("you lose");
         msg.innerText = `you Lost! ${compchoice} beats your ${userchoice} `;
             msg.style.backgroundColor = "red";
    }
}
if(userchoice === compchoice){
    //draw game
    drawgame();
}else{//first case
    let userwin = true;
    if(userchoice === "rock"){
        //scissor paper
       userwin =  compchoice === "paper" ? false : true;
    }else if(userchoice === "paper"){//rock scissor case2.
        compchoice === "scissors"
        userwin = compchoice === "scissors" ? false : true;
    }else {
      userwin =  compchoice === "rock" ? false : true;
    }
    showWinner(userwin , userchoice,compchoice);
}
}
//user ke input k liye 
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id")

playgame(userchoice);
    });
});