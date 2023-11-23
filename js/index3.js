let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let result = document.getElementById('result')
let total = document.getElementById('total')

total.addEventListener("click", ()=> {
    console.log(amal.value)
    if (amal.value === '+') {
        result.innerText = +num1.value + +num2.value
    }
    else if (amal.value === '-') {
        result.innerText = +num1.value - +num2.value
    }
    else if (amal.value === '*') {
        result.innerText = +num1.value * +num2.value
    }
    else if (amal.value === '/') {
        result.innerText = +num1.value / +num2.value
    }
})