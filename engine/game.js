import {Grid} from "./Grid.js";


//Ok lets make a SPOOKY gameState
export default class Game {
    constructor(size) {
        this.game_is_won = false;
        this.observers_win = [];
        this.observers_lose = [];
        this.observers_move = [];
        this.size = size;
        this.game_grid = new Grid(size);
        this.board = this.game_grid.getGrid();

        this.two_d_array = this.givetwoDArray(this.board, this.size)
        this.gameState = {
            board: this.board,
            score: 0,
            won: false,
            over: false,
        };
    }
    setupNewGame() {
        this.board = new Grid(this.size).getGrid();
        this.gameState = {
            board: this.board,
            score: 0,
            won: false,
            over: false,
        };

    }
    loadGame(gameState) {
        this.gameState = gameState;
        this.two_d_array = this.givetwoDArray(gameState.board, this.size);

    }
    //I should prob make a logic method that combines slide and combine
    //because this is super repetitive and too much code for my move
    //But I shall do that in a later version


    //and to whoever said I wouldn't use linear algebra outside my Math 547 class...turns out I can :)
    move(direction) {
        switch (direction) {
            case 'down':
                this.two_d_array = this.rotate_grid(this.two_d_array);
                let past_d = Array.from(this.two_d_array);

                for (let i = 0; i < this.two_d_array.length; i++) {
                    this.two_d_array[i] = this.slide_rows(this.two_d_array[i]);
                    this.combine_rows(this.two_d_array[i]);
                    this.two_d_array[i] = this.slide_rows(this.two_d_array[i]);
                }

                let changed_d = this.compare_grid(past_d, this.two_d_array);
                this.gameState.board = this.two_d_array.reduce((acc, val) => acc.concat(val), []);
                let hit_d = false;
                if (changed_d) {
                    this.add_tile();
                    hit_d = true;
                }
                this.two_d_array = this.givetwoDArray(this.gameState.board, this.size);
                this.two_d_array = this.rotate_grid(this.two_d_array);
                this.two_d_array = this.rotate_grid(this.two_d_array);
                this.two_d_array = this.rotate_grid(this.two_d_array);
                this.gameState.board = this.two_d_array.reduce((acc, val) => acc.concat(val), []);
                if (hit_d) {
                    for (let i = 0; i < this.observers_move.length; i++) {
                        this.observers_move[i](this.gameState);
                    }
                }
                break;
            case 'up':
                this.two_d_array = this.rotate_grid(this.two_d_array);
                this.flip_grid(this.two_d_array);
                let past_u = Array.from(this.two_d_array);
                for (let i = 0; i < this.two_d_array.length; i++) {
                    this.two_d_array[i] = this.slide_rows(this.two_d_array[i]);
                    this.combine_rows(this.two_d_array[i]);
                    this.two_d_array[i] = this.slide_rows(this.two_d_array[i]);
                }
                let changed_u = this.compare_grid(past_u, this.two_d_array);
                this.gameState.board = this.two_d_array.reduce((acc, val) => acc.concat(val), []);
                let hit_u = false;
                if (changed_u) {
                    this.add_tile();
                    hit_u = true;
                }

                this.two_d_array = this.givetwoDArray(this.gameState.board, this.size);
                this.flip_grid(this.two_d_array);
                this.two_d_array = this.rotate_grid(this.two_d_array);
                this.two_d_array = this.rotate_grid(this.two_d_array);
                this.two_d_array = this.rotate_grid(this.two_d_array);
                this.gameState.board = this.two_d_array.reduce((acc, val) => acc.concat(val), []);
                if (hit_u) {
                    for (let i = 0; i < this.observers_move.length; i++) {
                        this.observers_move[i](this.gameState);
                    }
                }
                break;
            case 'right':
                let past_r = Array.from(this.two_d_array);
                for (let i = 0; i < this.two_d_array.length; i++) {
                    this.two_d_array[i] = this.slide_rows(this.two_d_array[i]);
                    this.combine_rows(this.two_d_array[i]);
                    this.two_d_array[i] = this.slide_rows(this.two_d_array[i]);
                }
                let changed_r = this.compare_grid(past_r, this.two_d_array);
                this.gameState.board = this.two_d_array.reduce((acc, val) => acc.concat(val), []);
                let hit_r = false;
                if (changed_r) {
                    this.add_tile();
                    hit_r = true;
                }
                this.two_d_array = this.givetwoDArray(this.gameState.board, this.size);
                this.gameState.board = this.two_d_array.reduce((acc, val) => acc.concat(val), []);
                if (hit_r) {
                    for (let i = 0; i < this.observers_move.length; i++) {
                        this.observers_move[i](this.gameState);
                    }
                }

                break;
            case 'left':
                this.flip_grid(this.two_d_array);
                let past_l = Array.from(this.two_d_array);
                for (let i = 0; i < this.two_d_array.length; i++) {
                    this.two_d_array[i] = this.slide_rows(this.two_d_array[i]);
                    this.combine_rows(this.two_d_array[i]);
                    this.two_d_array[i] = this.slide_rows(this.two_d_array[i]);
                }
                let changed_l = this.compare_grid(past_l, this.two_d_array);
                this.gameState.board = this.two_d_array.reduce((acc, val) => acc.concat(val), []);
                let hit_l = false;
                if (changed_l) {
                    this.add_tile();
                    hit_l = true;
                }
                this.two_d_array = this.givetwoDArray(this.gameState.board, this.size);
                this.flip_grid(this.two_d_array);
                this.gameState.board = this.two_d_array.reduce((acc, val) => acc.concat(val), []);
                if (hit_l) {
                    for (let i = 0; i < this.observers_move.length; i++) {
                        this.observers_move[i](this.gameState);
                    }
                }
                break;
            default:
                return;
        }
        let isgameover = this.isGameOver();
        if (isgameover) {
            this.gameState.over = true;
            for (let i = 0; i < this.observers_lose.length; i++) {
                this.observers_lose[i](this.gameState);
            }

        }
        if (this.game_is_won) {
            for (let i = 0; i < this.observers_win.length; i++) {
                this.observers_win[i](this.gameState);
            }
            this.game_is_won = false;
        }
    }


    get_board() {
        return this.board;
    }

    toString() {
        console.table(this.two_d_array);
        return 1;

    }
    onMove(callback) {
        this.observers_move.push(callback);
    }
    onWin(callback) {
        this.observers_win.push(callback)
    }
    onLose(callback) {
        this.observers_lose.push(callback);
    }
    getGameState() {
        return this.gameState;
    }


    //helper functions
    givetwoDArray(a, b) {
        return (Array(Math.ceil(a.length / b)) + '').split(',').map(function (c, d) {
            return a.slice(b * d, b * (d + 1));
        });
    }

    add_tile() {
        let stringtile = this.RandomBasedOnWeight({ 2: 0.9, 4: 0.1 });
        let tile = parseInt(stringtile, 10);
        let random_index_1 = Math.floor(Math.random() * this.gameState.board.length)
        if (this.gameState.board[random_index_1] == 0) {
            this.gameState.board[random_index_1] = tile;
        } else {
            while (this.gameState.board[random_index_1] != 0) {
                random_index_1 = Math.floor(Math.random() * this.gameState.board.length)
            }
            this.gameState.board[random_index_1] = tile;
        }
    }
    copy_grid(grid) {
        let past = this.givetwoDArray(grid, this.size);
        return past;
    }

    compare_grid(grid_1, grid_2) {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (grid_1[i][j] !== grid_2[i][j]) {
                    return true;
                }
            }
        }
        return false;
    }

    flip_grid(grid) {
        for (let i = 0; i < this.size; i++) {
            grid[i].reverse();
        }
    }

    isGameOver() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                //if we have zeros anywhere we can still play
                if (this.two_d_array[i][j] == 0) {
                    return false;
                }
                //check side pairs
                //need to make sure we don't hit edge so this.size -1 is a fix
                if (i !== (this.size - 1) && this.two_d_array[i][j] === this.two_d_array[i + 1][j]) {
                    return false;
                }
                //check up and down pairs
                if (j !== (this.size - 1) && this.two_d_array[i][j] === this.two_d_array[i][j + 1]) {
                    return false;
                }

            }
        }
        return true;
    }
    give_new_grid() {
        let blank_grid = new Grid(this.size).getGrid();
        let flat_grid = this.givetwoDArray(blank_grid, this.size);
        return flat_grid;
    }

    rotate_grid(grid) {
        let new_grid = this.give_new_grid();
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                new_grid[i][j] = grid[j][i];
            }
        }
        return new_grid;
    }
    slide_rows(row) {
        let temp_row = row.filter(x => x);
        let zeros = this.size - temp_row.length;
        let new_array = Array(zeros).fill(0);
        new_array = new_array.concat(temp_row);
        return new_array;

    }
    combine_rows(row) {
        for (let i = row.length - 1; i >= 1; i--) {
            let x = row[i];
            let y = row[i - 1];
            if (x == y) {
                row[i] = x + y;
                this.gameState.score += row[i];
                if (row[i] == 2048) {
                    this.gameState.won = true;
                    this.game_is_won = true;
                }
                row[i - 1] = 0;
            }
        }
    }

    RandomBasedOnWeight(input) {
        let i, sum = 0, r = Math.random();
        for (i in input) {
            sum += input[i];
            if (r <= sum) return i;
        }
    }



}


