let saveEl =document.getElementById("save-el")

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment(){
    count +=  1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    console.log(count)
    count = 0
}