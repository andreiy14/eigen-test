// soal 1
const numberOne = (string)=>{
  let temp = string.split("")
  const arrStr = []
  const arrNum = []
  for(let i = 0; i<temp.length; i++){
      if(!!Number(temp[i]) === true){
          arrNum.push(temp[i])

  
    
      }
    if(!!Number(temp[i]) === false){
        arrStr.push(temp[i])
      

    }
    
  }

    return temp = [...arrStr.reverse(), ...arrNum].join("").toString()
  

}


console.log(numberOne("NEGIE1"))


// soal 2

const numberTwo = (string) =>{
  const arrStr = string.split(" ")

  const sortArr = arrStr.sort(function(a, b){
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return b.length - a.length;
});

  console.log(sortArr[0].length)
}

numberTwo("Saya sangat senang mengerjakan soal algoritma")


//soal 3
const numberThree =(arr1,arr2)=>{
  let dataTemp = arr2.map((item,index) => item =0 )

arr2.forEach((parent,indexParent)=>{
  arr1.forEach((child,indexChild)=>{
      if(parent === child){
      dataTemp[indexParent] +=1
      }
  })
})
  

  return dataTemp
}

const input = ['xc', 'dz', 'bbb', 'dz']  
const query = ['bbb', 'ac', 'dz'] 
console.log(numberThree(input,query))

// soal 4
const numberFour = (arr)=>{
 let mainDiagonal = 0;
let secondaryDiagonal = 0;
let x = arr.length;
  let result = 0
for (let i = 0; i < x; i++) {
    mainDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][x - i - 1];
}

  
return mainDiagonal - secondaryDiagonal;
}
console.log(numberFour([[1, 2, 0], [4, 5, 6], [7, 8, 9]]))