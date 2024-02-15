import React from 'react';

// Traditional function declaration for unroll
function unroll(squareArray) {
    let result = [];
    while (squareArray.length) {
        // Add the first row to result
        result = result.concat(squareArray.shift());
        
        // Add the last element of each remaining row
        squareArray.forEach(row => {
            if (row.length) result.push(row.pop());
        });
        
        // Add the last row in reverse if there's any row left
        if (squareArray.length) result = result.concat(squareArray.pop().reverse());
        
        // Add the first element of each remaining row in reverse order
        squareArray.reverse().forEach(row => {
            if (row.length) result.push(row.shift());
        });
    }
    return result;
}

// Example React component using the unroll function
function SquareArrayComponent() {
    const squareArray = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];

    // Use the unroll function on a deep copy of the squareArray to avoid mutating the original
    const unrolledArray = unroll(JSON.parse(JSON.stringify(squareArray)));

    return (
        <div>
            <h2>Unrolled Square Array</h2>
            <p>{JSON.stringify(unrolledArray)}</p>
        </div>
    );
}

export default SquareArrayComponent;
