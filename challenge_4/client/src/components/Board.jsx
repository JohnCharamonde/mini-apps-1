import React from 'react';
import dataForNewGame from '../dataForNewGame.js';

class Board extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      columns: dataForNewGame.columns,
      rows: dataForNewGame.rows,
      checkForWinData: dataForNewGame.checkForWinData,
      turn: 'YELLOW'
    }
  }


  // checkForWin
// checkIfMoveIsLegal
// tokenPlacementHandler


  // resetBoardDatabaseToOriginal  -relevant to DB...
// checkForWin
// checkIfMoveIsLegal
// tokenPlacementHandler

  render() {
    let isRedTurn = this.state.turn === 'RED';
    return(
      <div>
        <div style={{fontSize: 50, color: 'white'}}>IT'S <span style={{color: isRedTurn === true ? 'red' : 'yellow'}}>{this.state.turn}</span>'S TURN</div>

      </div>
    )
  }
}

export default Board;
