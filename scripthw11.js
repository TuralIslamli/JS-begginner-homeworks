// 11) Повторяющийся элемент: Нужно создать массив с разными элементами. Некоторые элементы должны повторятся. Нужно удалить из массива повторяющийся элемент.

const myArray=[4, 0, 2, 8, 4, 9, 2, 57, 41];
console.log(myArray);


for(i=0; i<myArray.length; i++){
    for(j=0; j<myArray.length;j++){
        if(myArray[i]===myArray[j] && i!==j) {
            myArray.splice(myArray[j], 1);
        }
    }
}

console.log(myArray);