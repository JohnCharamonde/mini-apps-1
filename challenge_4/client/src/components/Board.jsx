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

  handleClick(columnHead, e) {
    var columnCopy = Array.from(this.state.columns)
    var targetId;
    if(this.state.columns[columnHead][0] === 'RED' || this.state.columns[columnHead][0] === 'YELLOW') {
      alert('This is an illegal move! Please try again!');
    } else {
      for(let i = this.state.columns[columnHead].length - 1; i > -1; i--) {
        if(typeof(this.state.columns[columnHead][i]) === 'number') {
          targetId = this.state.columns[columnHead][i];
          columnCopy[columnHead][i] = this.state.turn;
          break;
        }
      }
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
    let isRedTurn = this.state.turn === 'RED'
    return (
      <div>
        <div style={{ fontSize: 50, color: 'white' }}>IT'S <span style={{ color: isRedTurn === true ? 'red' : 'yellow' }}>{this.state.turn}</span>'S TURN</div>
        <table>
          <thead>
            <tr>
              {this.state.columnHeads.map(columnHead =>
                < ColumnHeadItem columnHead={columnHead} handleClick={this.handleClick.bind(this)}/>
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