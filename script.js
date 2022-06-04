let array = [];

for(let i = 0; i < Infinity; i++){
    let console1 = prompt('Введите команду');
    let arr = console1.split(',');
    if(arr[0] == "add"){
        array.push(arr[1]);
    }else if (arr[0] == "del") {
        let arr2 = console1.split(',');
        array.shift(arr2[-1])
    }else if (arr[0] == "stop") {
        break;
    }
    console.log(array);
}
