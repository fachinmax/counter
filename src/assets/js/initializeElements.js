'use strict'

// functions
// get the right user count
function getCount() {
    let count = window.localStorage.getItem('count')
    if(count) return count
    window.localStorage.setItem('count', 0)
    return '0'
}

// function that transform un object into a element
function convertObjectsToElements(arrElements) {
    return arrElements.map((item) => {
        let element = document.createElement(item.type)
        if(item.class) {
            element.className = item.class
        }
        if(item.id) {
            element.id = item.id
        }
        if(item.content) {
            element.innerHTML = item.content
        }
        return element
    })
}


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


// transform all objects into elements
elements = convertObjectsToElements(elements)
containers = convertObjectsToElements(containers)


// append all elements
// append h1
containers[0].append(elements.pop())

// append all buttons
elements.forEach(item => {
    containers[1].append(item)
})

// append all containers into body
containers.forEach(item => {
    document.body.append(item)
})