const wordSearch = (letters, word) => { 
  if (!letters || letters.length === 0) {
    return false; // handle empty input array
  }

  const numRows = letters.length;
  const numCols = letters[0].length;

  // check for horizontal occurrence
  for (let i = 0; i < numRows; i++) {
    const row = letters[i].join('');
    if (row.includes(word)) {
      return true;
    }
  }

  // check for vertical occurrence
  for (let j = 0; j < numCols; j++) {
    let col = '';
    for (let i = 0; i < numRows; i++) {
      col += letters[i][j];
    }
    if (col.includes(word)) {
      return true;
    }
  }

  return false; // word not found
}

module.exports = wordSearch