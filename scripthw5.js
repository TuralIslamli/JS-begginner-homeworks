// // 5) Сумма элементов массива
// // Нужно создать массив с числами. Далее нужно сложить все элементы и вывести их сумму

const testArray = [5, 4, 8, 10, 21];
let elementSum=0;

for(i=0; i<testArray.length; i++){
    elementSum=elementSum+testArray[i];
}
console.log(elementSum);