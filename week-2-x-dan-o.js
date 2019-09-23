function xo(str) {
    let o = 0;
    let x = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'x'){
            x++
        } else{
            o++
        }
    }
    if(x === o){
        return true;
    } else{
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true