
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == null) return [];

  let sort = matrix.map((item, index) => {
      return (index % 2 !== 0) ? item.reverse() : item;
    });

  return sort.flat();
};
