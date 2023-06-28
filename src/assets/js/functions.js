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


export {getCount, convertObjectsToElements}