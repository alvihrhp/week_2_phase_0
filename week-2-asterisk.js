//Soal 1
for(let i = 0; i < 5; i++){
    console.log('*');
}
//Soal 2
let tmp = '';
for(let i = 0; i < 5; i++){
    tmp = '';
    for(let j = 0; j < 5; j++){
        tmp += '*';
    }
    console.log(tmp);    
}
//Soal 3
let temp = '';
for(let i = 0; i < 5; i++){
    temp = '';
    for(let j = 0; j <= i; j++){
        temp += '*';
    }
    console.log(temp);
}