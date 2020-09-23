//Pair Programmed by @skendanavian and @Deteri0n
const transpose = function(matrix) {
    let cols = matrix[0].length; // number of columns in the original matrix
    let newMatrix = []; // this is the accumulator
    for (let i = 0; i < cols; i++) { // loop through all of the indices in the sub-array
        let newRow = []; // this a sub - accumulator
        for (let array of matrix) { // loop through each of the sub-arrays of the matrix
            newRow.push(array[i]) // push to a sub- accumulator
        }
        newMatrix.push(newRow) // push all the new sub-arrays to the new matrix
    }
    return newMatrix; // victory!
};

const wordSearchHorizontal = (letters, word) => {
    //check horizontally for word
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log(horizontalJoin);
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};

const wordSearch = (letters, word) => {
    //if empty array - return false
    if (letters.length === 0) {
        return false;
    }
    //if input word is not a word - return undefined
    else if (typeof word !== "string" || word instanceof String) {
        return undefined;
    } else if (wordSearchHorizontal(letters, word)) {
        return true;
        // check horisontally on the reversed array
    } else if (wordSearchHorizontal(transpose(letters), word)) {
        return true;
    } else {
        return false;
    }
};

module.exports = wordSearch;