const createBoard = (rows, columns) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return {
        row,
        column,
        opened: false,
        mined: false,
        exploded: false,
        flagged: false,
        nearMines: 0,
      };
    });
  });
};

const spreadMines = (board, minesAmount) => {
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;

  while (minesPlanted < minesAmount) {
    const randomRowNumber = parseInt(Math.random() * rows, 10);
    const randomColNumber = parseInt(Math.random() * columns, 10);

    if (!board[randomRowNumber][randomColNumber].mined) {
      board[randomRowNumber][randomColNumber].mined = true;
      minesPlanted++;
    }
  }
};

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

const cloneBoard = board => {
  return [...board];
};

const getNeighbors = (board, row, col) => {
  const neighbors = [];
  const rows = [row-1, row, row+1];
  const cols = [col-1, col, col+1];

  rows.forEach(r => {
    cols.forEach(c => {
      if (r === row && c === col) return;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;

      if (validRow && validColumn) {
        neighbors.push(board[r][c]);
      }
    });
  });

  return neighbors;
};

const safeNeighborhood = (board, row, column) => {
  const safeCheck = (result, neighbor) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safeCheck, true);
};

const openField = (board, row, column) => {
  const field = board[row][column];

  if (!field.opened) {
    field.opened = true;
    if (field.mined) {
      field.exploded = true;
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column)
      );
    } else {
      field.nearMines = getNeighbors(board, row, column).filter(n => n.mined).length;
    }
  }
};

const fields = board => [].concat(...board);

const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0;

const pending = field => (!field.opened && field.mined && !field.flagged) || (!field.mined && !field.opened);

const wonGame = board => fields(board).filter(pending).length === 0;

const showMines = board => fields(board).filter(field => field.mined).forEach(f => f.opened = true);

const invertFlag = (board, row, col) => {
  const field = board[row][col];
  field.flagged = !field.flagged;
}

const flagsUsed = board => fields(board).filter(f => f.flagged).length

export {
  createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, flagsUsed
};
