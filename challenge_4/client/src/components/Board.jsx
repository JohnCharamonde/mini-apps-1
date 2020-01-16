import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      columns: [],
      rows: [],
      checkForWinData: [],
      turn: 'red'
    }
  }

  // resetBoardDatabaseToOriginal
// checkForWin
// checkIfMoveIsLegal
// tokenPlacementHandler

  render() {
    return(
      <div>
        <div>{this.state.turn}</div>
      </div>
    )
  }
}

export default Board;
