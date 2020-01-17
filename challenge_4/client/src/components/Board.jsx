import React from 'react';
import dataForNewGame from '../dataForNewGame.js';
import ColumnHeadItem from './ColumnHeadItem.jsx';
import BoardRow from './BoardRow.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props),
      this.state = {
        columnHeads: [0, 1, 2, 3, 4, 5, 6],
        columns: dataForNewGame.columns,
        rows: dataForNewGame.rows,
        checkForWinData: dataForNewGame.checkForWinData,
        turn: 'RED'
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
    return (
      <div>
        <div style={{ fontSize: 50, color: 'white' }}>IT'S <span style={{ color: isRedTurn === true ? 'red' : 'yellow' }}>{this.state.turn}</span>'S TURN</div>
        <table>
          <thead>
            <tr>
              {this.state.columnHeads.map(columnHead =>
                < ColumnHeadItem columnHead={columnHead} />
              )}
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map(row =>
                < BoardRow row={row} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board;