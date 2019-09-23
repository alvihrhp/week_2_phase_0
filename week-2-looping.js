//Soal 1
let i = 0;
console.log('LOOPING PERTAMA');
while(i <= 20){
    console.log(i + ' - I love coding');
    i+=2
}
console.log('LOOPING KEDUA');
i-=2;
while(i >= 0){
    console.log(i + ' - I will become fullstack developer');
    i-=2;
}
//Soal 2
console.log('LOOPING PERTAMA');
for(let i = 0; i <= 20; i+=2){
    console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for(let i = 20; i >= 0; i-=2){
    console.log(i + ' - I will become fullstack developer');
}
//Soal 3
for(let i = 1; i <= 100; i++){
    if((i % 2) === 0){
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}
for(let i = 1; i <= 100; i+=2){
    if((i % 3) === 0){
        console.log(i + ' Kelipatan 3');
    }
}
for(let i = 1; i <= 100; i+=5){
    if((i % 6) === 0){
        console.log(i + ' Kelipatan 6');
    }
}
for(let i = 1; i <= 100; i+=9){
    if((i % 10) === 0){
        console.log(i + ' Kelipatan 10');
    }
}