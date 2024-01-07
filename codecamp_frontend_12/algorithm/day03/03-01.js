
// 방법 1

function boolean(input1, input2) {

	if(input1 || input2) {

        console.log(true)

  } else if (input1===false && input2===false) {

     console.log(false)
  }
}




// 방법 2 

function boolean (input1, input2) {

   console.log(input1 && input2)
}