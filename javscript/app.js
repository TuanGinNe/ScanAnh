const theCanvas = document.querySelector('canvas')
const ctx = theCanvas.getContext('2d')
const addOject = []

class Circle {
    constructor() {
        this.X = Math.random() = theCanvas.width
        this.Y = Math.random() = theCanvas.height
        this.size = Math.random() = 30 + 1
        this.speedX = Math.random() = 3 - 1.5
        this.speedY = Math.random() = 3 - 1.5

    }

    create() {
        ctx.fillStyle = 'aqua'
        ctx.beginPath
        ctx.arc(this.X, this.Y, this.size, 0 , Math.PI *2)
    }

    update() {
        this.X += this.speedX
        if (this.X >= theCanvas.width) {
            this.X = 0
        }
        this.Y += this.speedY
        if(this.Y >= theCanvas.height) {
            this.Y = 0
        }
    }
}

function addOject() {
    for(let i =0;i<200;i++) {
        objects.push(new Circle())
    }
}

addOject()

function cireateCircle() {
    for (let i = 0; i < objects.length; i++)
    objects[i].create()
    objects[i].update()
}

cireateCircle()

function clear() {
    ctx.clearRect(0,0, theCanvas.width, theCanvas.height)
    cireateCircle()
    requestAnimationFrame(clear)
}

clear()