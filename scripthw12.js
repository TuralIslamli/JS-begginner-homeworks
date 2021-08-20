// 12) Дополнительное задание: Выполнить сортировку массива методом пузырком

const myArray = [4, 0, 2, 8, 4, 9, 2, 57, 41];
console.log(myArray);
for (i = 0; i < myArray.length; i++) {
    for (j = i+1; j < myArray.length; j++) {
        if(myArray[i]>myArray[j]){
            let temp=myArray[j];
            myArray[j]=myArray[i];
            myArray[i]=temp;
        }
    }
}
console.log(myArray);