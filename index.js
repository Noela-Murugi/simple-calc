
const button = document.querySelector('.add')
const operators = document.querySelector('#operators')
const result= document.querySelector('.result')


button.addEventListener('click', (e)=>{
    e.preventDefault()
    const operatorValue =  document.querySelector('#operators').value
    const value1 = document.querySelector('.input1').value
    const value2 = document.querySelector('.input2').value
    if(operatorValue==='+'){
        const calculation = Number(value1) + Number(value2)
        result.innerHTML= `The result is ${calculation}`

    }
     else if(operatorValue==='*'){
        const calculation = Number(value1) * Number(value2)
        result.innerHTML= `The result is ${calculation}`

     }
     else if(operatorValue==='/'){
        const calculation = Number(value1) / Number(value2)
        result.innerHTML= `The result is ${calculation}`
     }
     else if(operatorValue==='-'){
        const calculation = Number(value1) - Number(value2)
        result.innerHTML= `The result is ${calculation}`
     }
     document.querySelector('.input2').value =''
     document.querySelector('.input1').value =''
  
})