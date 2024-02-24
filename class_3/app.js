function main(){
  const firstNum = document.getElementById('first_no')
  const secondNum = document.getElementById('second_no')
  const answer = document.getElementById('answer')
  const summation = document.getElementById('summation')
  const substract = document.getElementById('substract')
  const multiply = document.getElementById('multiply')
  const divide = document.getElementById('divide')
  const reset = document.getElementById('reset')

  summation.addEventListener('click', function(){
    const sum = parseInt(firstNum.value) + parseInt(secondNum.value);
    answer.value = sum
  })
  substract.addEventListener('click', function(){
    const sub = parseInt(firstNum.value) - parseInt(secondNum.value);
    answer.value = sub
  })
  multiply.addEventListener('click', function(){
    const mul = parseInt(firstNum.value) * parseInt(secondNum.value);
    answer.value = mul
  })
  divide.addEventListener('click', function(){
    const div = parseInt(firstNum.value) / parseInt(secondNum.value);
    answer.value = div
  })

  reset.addEventListener('click', function(){
    firstNum.value = '';
    secondNum.value = '';
    answer.value = '';

  })

}

main()