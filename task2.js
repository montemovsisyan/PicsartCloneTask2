function flipAndInvert(matrix) {
    const n = matrix.length;
    // Flip the matrix horizontally
    const flippedMatrix = matrix.map(row => row.reverse());
    // Invert the values of the matrix
    const invertedMatrix = flippedMatrix.map(row => row.map(val => val === 0 ? 1 : 0));
    return invertedMatrix;
}

// Test the function
const inputMatrix = [
    [0, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 1]
];

const outputMatrix = flipAndInvert(inputMatrix);
outputMatrix.forEach(row => console.log(row));
