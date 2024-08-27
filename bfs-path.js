function findNeighbors(node, matrix) {
    const [row, col] = node;
    const neighbors = [];

    // Up
    if (row > 0) neighbors.push([row - 1, col]);
    // Down
    if (row < matrix.length - 1) neighbors.push([row + 1, col]);
    // Left
    if (col > 0) neighbors.push([row, col - 1]);
    // Right
    if (col < matrix[0].length - 1) neighbors.push([row, col + 1]);

    return neighbors;
}


function bfsPath(matrix, startNode, endValue) {
    const queue = [[startNode]];
    const visited = new Set();
    visited.add(startNode.toString());

    while (queue.length > 0) {
        const path = queue.shift();
        const [row, col] = path[path.length - 1];

        console.log('Current path:', path); // Debugging output

        // Check if we found the endValue
        if (matrix[row][col] === endValue) {
            return path;
        }

        // Get neighbors
        const neighbors = findNeighbors([row, col], matrix);
        for (let neighbor of neighbors) {
            const neighborKey = neighbor.toString();

            if (!visited.has(neighborKey)) {
                visited.add(neighborKey);
                queue.push([...path, neighbor]);
            }
        }
    }

    return false; // End value not found
}



// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
