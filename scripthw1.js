// 1) День недели
// Нужно ввести число и на полученное число вернуть день недели. 
// Обработка ошибок: Если ввел не верное число (больше или отрицательное) вводить сообщение что не верно введено, повторите еще раз.

let temp = true;

while (temp) {
    let dayNum = prompt("Укажите число дня недели.");
    dayNum = Number(dayNum);
    switch (dayNum) {
        case 1:
            alert("Это понедельник!");
            temp = false;
            break;
        case 2:
            alert("Это вторник!");
            temp = false;
            break;
        case 3:
            alert("Это среда!");
            temp = false;
            break;
        case 4:
            alert("Это четверг!");
            temp = false;
            break;
        case 5:
            alert("Это пятница!");
            temp = false;
            break;
        case 6:
            alert("Это суббота!");
            temp = false;
            break;
        case 7:
            alert("Это воскресенье!");
            temp = false;
            break;
        default: alert("Не корректно. Пожалуйста укажите верно! Укажите число дня недели.");
        break;
    }
}