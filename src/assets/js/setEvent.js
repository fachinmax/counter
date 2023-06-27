// function
function setCount(event) {
    let countValue = parseInt(count.innerHTML)
    switch(event.target.id) {
        case 'upButton':
            countValue++
            break
        case 'resetButton':
            countValue = 0
            break
        case 'downButton':
            countValue--
            break
        default:
            return
            break
        }
    count.innerHTML = countValue
    window.localStorage.setItem('count', countValue)
}



let count = document.querySelector('#count')
let container = document.querySelector('#buttonContainer')


container.addEventListener('click', setCount)
container.addEventListener('dblclick', setCount)