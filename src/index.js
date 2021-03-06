
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    if (typeof(matrix) === 'undefined') {
        return result
    }
    for (let i=0; i<matrix.length; i++) {
        if (i%2 === 0) {
            for (let j=0;j<matrix[i].length;j++) {
                result.push(matrix[i][j]);
            }
        }
        else {
            console.log(i);
            console.log(matrix[i].length);
            for (let k=matrix[i].length-1;k>=0;k--) {
                result.push(matrix[i][k]);
            }
        }
    }
    return result;
}
