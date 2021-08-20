// 7) Функция, которая принимает число до 1000 и возвращает массив из делителей этого числа

function Divs() {
    let temp = true;
    let userNum;
    const numDivsArray = [];
    while (temp) {
        userNum = Number(prompt("Укажите число до 1000"));
        if (userNum > 1000 || isNaN(userNum / 2) == true) {
            alert("Надо выбрать число до 1000!");
        } else {
            temp = false;
        }
    }
    let index = 0;
    for (i = 0; i <= userNum; i++) {
        if (userNum % i == 0) {
            numDivsArray[index] = i;
            index++;
        }
    }
    return numDivsArray;
}

const newArray = Divs();
alert (("Все делители числа")+("\n")+ newArray.join ("\n"));