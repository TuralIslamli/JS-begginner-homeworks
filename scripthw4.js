// 4) Количество элементов двух массивов
// Нужно создать 2 массива. Массивы должны хранить однотипные данные. Далее нужно их объединить в один и вывести количество всех элементов.

const firstArray = [0, 2, 1, 4];
const secondArray = [5, 4, 8, 10, 21];

const mixArray = firstArray.concat(secondArray);
console.log(mixArray.length);