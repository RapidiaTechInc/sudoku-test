const sudokuPrinter = (sudoku) => {
    var output = '';
    for (row=0; row<9; row++) {
        for (col=0; col<9; col++) {
            output = output + sudoku[row*9 + col];
            if (col === 2 || col === 5) {
                output = output + ' ';
            }
        }
        output = output + '\n';
        if (row === 2 || row === 5) {
            output = output + '\n';
        }
    }
    return output;
}

const puzzle = [
    0,0,0, 0,0,9, 0,0,0,
    0,3,0, 1,0,0, 0,0,6,
    0,0,1, 0,0,0, 0,5,9,

    4,0,0, 0,8,1, 0,2,0,
    0,0,9, 0,7,0, 8,0,0,
    0,7,8, 3,5,0, 0,0,1,

    5,4,0, 0,0,0, 6,0,0,
    8,0,0, 0,0,6, 0,9,0,
    0,0,0, 7,0,0, 0,0,0,
]
console.log('puzzle = ')
console.log(sudokuPrinter(puzzle))

console.log('solution = ')
console.log(sudokuPrinter(puzzle))

const solution = [
    6,8,4, 5,3,9, 1,7,2,
    9,3,5, 1,2,7, 4,8,6,
    7,2,1, 4,6,8, 3,5,9,

    4,6,3, 9,8,1, 7,2,5,
    1,5,9, 6,7,2, 8,3,4,
    2,7,8, 3,5,4, 9,6,1,

    5,4,2, 8,9,3, 6,1,7,
    8,1,7, 2,4,6, 5,9,3,
    3,9,6, 7,1,5, 2,4,8,
]
console.log('actual solution = ')
console.log(sudokuPrinter(solution))

const puzzle2 = [
    0,2,0, 9,0,3, 6,7,1,
    0,0,0, 0,1,0, 8,0,0,
    0,0,3, 0,2,6, 0,0,0,

    2,5,0, 1,6,9, 0,0,8,
    6,7,0, 0,0,8, 2,0,0,
    0,3,0, 0,7,0, 0,0,6,

    5,0,0, 0,9,0, 0,6,0,
    0,0,2, 0,0,0, 0,0,0,
    0,0,6, 4,0,7, 0,9,0,
]
