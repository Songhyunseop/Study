

function bigNum(str) {
  
    let biggest = str[0];
    
    for(let i=1; i<str.length; i++) {
      
      if(Number(str[i]) > biggest) {
        
        biggest = Number(str[i]);
     }
    }
    return biggest;
  }