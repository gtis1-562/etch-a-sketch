function addMultiple(where, what, count, callBack) {
    for(let i = 0; i < count; i++){
        let item = document.createElement(what);
        where.appendChild(item)

        callBack(item)
    }
}

const containGrid = document.getElementById('grid');
addMultiple(containGrid, 'div', 270, item => {
    item.classList.add('box')
})


const boxes = document.querySelectorAll('.box');

const contain = boxes;

const blue = document.getElementById('blue');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');


function playSketch() {
   boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.background = 'blue'
            console.log("Change")
        })
    })
    
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    boxes.forEach((box) => {
        
            box.style.background = 'gray'
            console.log("Reset")
        
    })
})
blue.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.background = 'blue'
            console.log("Change")
        })
    })
})
red.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.background = 'red'
            console.log("Change")
        })
    })
})
yellow.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.background = 'yellow'
            console.log("Change")
        })
    })
})
}
playSketch()
    



console.log("hello1")