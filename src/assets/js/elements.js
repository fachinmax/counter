import {getCount} from './functions'


// variables that contain all objects that I'm going to transform into element
// variable that cointain all objects that aren't containers
let elements = [
    {
        'type': 'button',
        'class': 'button button--up',
        'id': 'upButton',
        'content': '<span>+</span>',
    },
    {
        'type': 'button',
        'class': 'button button--reset',
        'id': 'resetButton',
        'content': '<i class="fa-solid fa-arrow-rotate-right"></i>',
    },
    {
        'type': 'button',
        'class': 'button button--down',
        'id': 'downButton',
        'content': '<span>-</span>',
    },
    {
        'type': 'h1',
        'class': 'count',
        'id': 'count',
        'content': getCount(),
    },
]

// variable that cointain all container
let containers = [
    {
        'type': 'div',
        'class': 'container container--count',
    },
    {
        'type': 'div',
        'class': 'container container--buttons',
        'id': 'buttonContainer'
    },
]

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

export {elements, containers, Counter}