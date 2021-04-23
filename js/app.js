const board = [];
const frames = [];
const session = [];

session.color = _ => { return document.getElementById('color').value };

board.togglePixel = function(evt) {
    const pxl = evt.target.dataset;
    pxl.color = session.color();
    evt.target.style.backgroundColor = pxl.color;
}

// Creating the board

    // Pixel
board.Pixel = class {
    constructor(x, y, parent) {
        const el = document.createElement('button');
        el.dataset.x = x;
        el.dataset.y = y;
        el.dataset.color = '';

        el.setAttribute('class', 'pixel');

        el.dataset.color = '';

        el.addEventListener('click', board.togglePixel)

        parent.appendChild(el)
    }
}

    // Board
const Board = class {
    constructor(size) {
        this.width = size[0];
        this.height = size[1];
        this.frames = [];
    }

    create = function() {

        const cont = document.createElement('div');

        // Run for every row
        for (let  y = 0; y < this.height; y++) {

            const row = document.createElement('div');

            // Run for every x-pixel
            for (let x = 0; x < this.width; x++) {
                const pxl = new board.Pixel(x, y, row);
            }

            cont.appendChild(row)
        }

        config.boardContainer.appendChild(cont)
    }
}

// Frames
const Frame = class {
    constructor() {

    }
}

const init = function() {
    // Create board
    session.board = new Board(defaults.size);
    session.board.create()
}