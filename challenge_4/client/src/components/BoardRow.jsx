import React from 'react';
import BoardRowItem from './BoardRowItem.jsx';

function BoardRow(props) {
  return (
    <tr>
      {props.row.map(item =>
        < BoardRowItem item={item} />
      )}
    </tr>
  )
}

export default BoardRow;
