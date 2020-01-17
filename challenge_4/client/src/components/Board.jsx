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
    var copyColumns = Array.from(this.state.columns);
    var targetId;

    // check legal move - if not = notify ELSE copy columns and update to prepare for setState
    if (this.state.columns[columnHead][0] === 'RED' || this.state.columns[columnHead][0] === 'YELLOW') {
      alert('This is an illegal move! Please try again!');
    } else {
      for (let i = this.state.columns[columnHead].length - 1; i > -1; i--) {
        if (typeof (this.state.columns[columnHead][i]) === 'number') {
          targetId = this.state.columns[columnHead][i];
          copyColumns[columnHead][i] = this.state.turn;
          console.log(targetId)
          console.log(copyColumns)
          break;
        }
      }
      //copy rows and update to prepare for setState
      var copyRows = Array.from(this.state.rows);
      for (let i = 0; i < this.state.rows.length; i++) {
        for (let j = 0; j < this.state.rows[i].length; j++) {
          if (this.state.rows[i][j] === targetId) {
            copyRows[i][j] = this.state.turn;
            console.log('copyRows', copyRows)
          }
        }
      }

      //copy checkForWinData and updata to prepare for setState
      var copyCheckForWinData = Array.from(this.state.checkForWinData);
      for (let i = 0; i < this.state.checkForWinData.length; i++) {
        for (let j = 0; j < this.state.checkForWinData[i].length; j++) {
          if (this.state.checkForWinData[i][j] === targetId) {
            copyCheckForWinData[i][j] = this.state.turn;
          }
        }
      }

      // prepare to change state.turn
      var newTurn = this.state.turn === 'RED' ? 'YELLOW' : 'RED';

      // setState with updates
      this.setState({
        columns: copyColumns,
        rows: copyRows,
        checkForWinData: copyCheckForWinData,
        turn: newTurn
      })

    }

    const areAllRed = currentVal => currentVal === 'RED';
    const areAllYellow = currentVal => currentVal === 'YELLOW';
    for(let i = 0; i < this.state.checkForWinData.length; i++) {
      var redHasWon = this.state.checkForWinData[i].every(areAllRed);
      var yellowHasWon = this.state.checkForWinData[i].every(areAllYellow);
      if(redHasWon) {
        alert('RED WINS!')
      } else if (yellowHasWon) {
        alert('YELLOW WINS!')
      }
    }
  }
  render() {
    let isRedTurn = this.state.turn === 'RED'
    return (
      <div>
        <div style={{ fontSize: 50, color: 'white' }}>IT'S <span style={{ color: isRedTurn === true ? 'red' : 'yellow' }}>{this.state.turn}</span>'S TURN</div>
        <table>
          <thead>
            <tr>
              {this.state.columnHeads.map(columnHead =>
                < ColumnHeadItem columnHead={columnHead} handleClick={this.handleClick.bind(this)} />
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