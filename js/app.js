const board = [];
const frame = [];
const session = [];

// Creating the board

    // Button
board.Button = class {
    constructor(x, y, parent) {
        const el = document.createElement('button');
        el.dataset.x = x;
        el.dataset.y = y;
        el.dataset.color = '';

        el.setAttribute('class', 'pixel')

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
                const btn = new board.Button(x, y, row);
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