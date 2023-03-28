

function makeNumber(num) {
	let str = '';

    if(num===1) {
      return box[0]
    }

    for(let i=1; i<num+1; i++) {

      if(i!==1) {
        str = str+ `-${i}`
      }

    }
    
    return box.join("")
}
