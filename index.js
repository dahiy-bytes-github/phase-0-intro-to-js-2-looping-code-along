function writeCards(arr, name) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`);
    }
    return newArr;
}


function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
