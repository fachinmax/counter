'use strict'

import * as functions from './functions.js'
import * as objectElements from './elements.js'


// handler click event
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


// transform all objects into elements
let arrElements = functions.convertObjectsToElements(objectElements.elements)
let arrContainers = functions.convertObjectsToElements(objectElements.containers)

// append all elements
// append h1
arrContainers[0].append(arrElements.pop())

// append all buttons
arrElements.forEach(item => {
    arrContainers[1].append(item)
})

// append all containers into body
arrContainers.forEach(item => {
    document.body.append(item)
})


let countWindow = document.querySelector('#count')
let buttonsContainer = document.querySelector('#buttonContainer')
let count = new objectElements.Counter(functions.getCount())

buttonsContainer.addEventListener('click', setCount)