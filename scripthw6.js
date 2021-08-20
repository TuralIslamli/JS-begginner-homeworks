// 6) Написать функцию, которая с помощью prompt спрашивает у пользователя число от 1 до 10. 
// При это функция тоже генерирует случайное число от 1 до 10. Если числа совпадут, 
// то выводится ответ “You guessed it right!”. Если числа не совпадают, то выдается ответ “Sorry. You lost”

function luckyGame(){
    let game=true

    while(game==true){
        let userChoise = Number(prompt("Choise a number from 1 to 10"))
        let randomNum = Math.floor(Math.random() * 10);
        if(userChoise<0 || userChoise>10 || isNaN(userChoise/2)==true){
            alert("Incorrect!");
        }
        else if(userChoise==randomNum){
            alert("You guessed it right!")
        }
        else{
            alert("Sorry. You lost.")
        }
    }
    game=confirm("If you want play again press ok, if not press cancel.");
}
luckyGame();