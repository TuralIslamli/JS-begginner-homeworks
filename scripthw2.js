// 2) Четное и нечетное 
// Нужно ввести число и как результат вывести четное это число или нет.


let temp = true;
while (temp) {
    let userNum = Number(prompt("Укажите число которую хотите проверить на четность."));
    if(userNum%2===0) {
        alert("Число четное");
        temp=false;
    }
    else if(isNaN(userNum/2)==true) {
        alert("Не корректно. Пожалуйста укажите верно!");
    }
    else {
        alert("Число нечетное");
        temp=false;
    }
}