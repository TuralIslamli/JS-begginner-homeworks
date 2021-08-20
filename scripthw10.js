// 10) Функция, которая принимает число и возвращает ответ, сложное оно или простое

function PrimeAndComp(){
    let temp = true;
    let userNum;
    let isComposite;
    while (temp) {
        userNum = Number(prompt("Укажите число до чтобы вычислить факториал."));
        if (isNaN(userNum / 2) == true) {
            alert("Некорректно, укажите число!");
        }
        else{
            temp = false;
        }
    }
    for(i=2;i<userNum;i++){
        if(userNum%i==0){
            alert("Число составное!");
            composite=true;
            break;
        }
        if(userNum%i!=0){
            alert("Число простое!");
            composite=false;
            break;
        }
    }
}

let isComposite=PrimeAndComp();