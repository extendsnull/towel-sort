module.exports = function towelSort (matrix) {
    if (!Array.isArray(matrix)) {
        return [];
    }

    const reducer = (accumulator, current, index) => {
        let temp = current.slice();
        
        if (index && index % 2) {
            temp.reverse();
        }

        return accumulator.concat(temp);
    };

    return matrix.reduce(reducer, []);
};
