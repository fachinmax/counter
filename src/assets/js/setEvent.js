// function
function setCount(event) {
    // event.target is the icon or span
    switch(event.target.closest('button').id) {
        case 'upButton':
            count.up()
            break
        case 'resetButton':
            count.reset()
            break
        case 'downButton':
            count.down()
            break
        default:
            return
            break
        }
    countWindow.innerHTML = count.get()
    window.localStorage.setItem('count', count.get())
}

class Counter {
    constructor(value = 0) {
        this.count = parseInt(value)
    }

    up() {
        this.count++
    }

    down() {
        this.count--
    }

    reset() {
        this.count = 0
    }

    get() {
        return this.count
    }
}


let countWindow = document.querySelector('#count')
let container = document.querySelector('#buttonContainer')
let count = new Counter(window.localStorage.getItem('count'))

container.addEventListener('click', setCount)
container.addEventListener('dblclick', setCount)