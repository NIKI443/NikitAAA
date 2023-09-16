const input1 = document.getElementById ('input1')
const submit = document.getElementById ('input2')
const plusBtn = document.getElementById ('plus')
const minusBtn = document.getElementById ('minus')
const multiplytBtn = document.getElementById ('multiply')
const dividetBtn = document.getElementById ('divide')
const submitBtn = document.getElementById ('submit')
let action = '+'
let masive = [0]

plusBtn.onclick = function () {
    action = '+'
    calculations()
  }
  
  minusBtn.onclick = function () {
    action = '-'
    calculations()
  }

  multiplytBtn.onclick = function () {
    action = '*'
    calculations()
  }
  
  dividetBtn.onclick = function () {
    action = '/'
    calculations()
  }

  function  printResult(result){
    submit.textContent = result 
    return input1.value = ""
  }
  
 

  
  function calculations() {
  const nam1 = masive[masive.length-1]
  if (action == '+') {
        const pluse = nam1 + Number(input1.value)
         masive.push(pluse)
    return nam1
    }else if (action == '-') {
      const minuse = nam1 - Number(input1.value)
       masive.push(minuse)
      return  nam1  
    }else if (action == '*') {
      const multiplye = nam1 * Number(input1.value)
      masive.push(multiplye)
      return nam1

    }else if (action == '/') {
      const dividee = nam1 / Number(input1.value)
      masive.push(dividee)
      return nam1
     }
  }







submitBtn.onclick = function(){
    const result = +masive[masive.length-1].toFixed(6)
    printResult(result)
   

}



