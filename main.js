
let screen = document.getElementById('screen')
let result = document.getElementById('result')
function Result() {
    console.log(screen.value)
    l = screen.value
    for (let i = 0; i < l.length; i++) {
         if (l[1] === '+') {
            result.innerText = Number(l[0]) + Number(l [2])
         }
         else if (l[2] === '+') {
            result.innerText = Number(l[0] + l[1]) + Number(l[3] + l[4])
         }
         else if (l[3] === '+') {
            result.innerText = Number(l[0] + l[1] + l[2]) + Number(l[4] + l[5] + l[6])
         }
         else if (l[4] === '+') {
            result.innerText = Number(l[0] + l[1] + l[2] + l[3]) + Number(l[5] + l[6] + l[7]+ l[8])
         }
         else if (l[5] === '+') {
            result.innerText = Number(l[0] + l[1] + l[2] + l[3] + l[4]) + Number(l[6] + l[7] + l[8]+ l[9] + l[10])
         }
         else if (l[1] === '-') {
            result.innerText = Number(l[0]) - Number(l [2])
         }
         else if (l[2] === '-') {
            result.innerText = Number(l[0] + l[1]) - Number(l[3] + l[4])
         }
         else if (l[3] === '-') {
            result.innerText = Number(l[0] + l[1] + l[2]) - Number(l[4] + l[5] + l[6])
         }
         else if (l[4] === '-') {
            result.innerText = Number(l[0] + l[1] + l[2] + l[3]) - Number(l[5] + l[6] + l[7]+ l[8])
         }
         else if (l[5] === '-') {
            result.innerText = Number(l[0] + l[1] + l[2] + l[3] + l[4]) - Number(l[6] + l[7] + l[8]+ l[9] + l[10])
         }
         else if (l[1] === '*') {
            result.innerText = Number(l[0]) * Number(l [2])
         }
         else if (l[2] === '*') {
            result.innerText = Number(l[0] + l[1]) * Number(l[3] + l[4])
         }
         else if (l[3] === '*') {
            result.innerText = Number(l[0] + l[1] + l[2]) * Number(l[4] + l[5] + l[6])
         }
         else if (l[4] === '*') {
            result.innerText = Number(l[0] + l[1] + l[2] + l[3]) * Number(l[5] + l[6] + l[7]+ l[8])
         }
         else if (l[5] === '*') {
            result.innerText = Number(l[0] + l[1] + l[2] + l[3] + l[4]) * Number(l[6] + l[7] + l[8]+ l[9] + l[10])
         }
         else if (l[1] === '/') {
            result.innerText = Number(l[0]) / Number(l [2])
         }
         else if (l[2] === '/') {
            result.innerText = Number(l[0] + l[1]) / Number(l[3] + l[4])
         }
         else if (l[3] === '/') {
            result.innerText = Number(l[0] + l[1] + l[2]) / Number(l[4] + l[5] + l[6])
         }
         else if (l[4] === '/') {
            result.innerText = Number(l[0] + l[1] + l[2] + l[3]) / Number(l[5] + l[6] + l[7]+ l[8])
         }
         else if (l[5] === '/') {
            result.innerText = Number(l[0] + l[1] + l[2] + l[3] + l[4]) / Number(l[6] + l[7] + l[8]+ l[9] + l[10])
         }
    }
}

let deleteall =() => {
    screen.value = ''
    result.innerText = ''
}