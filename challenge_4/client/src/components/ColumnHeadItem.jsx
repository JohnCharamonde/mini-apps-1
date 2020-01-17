import React from 'react';

function ColumnHeadItem(props) {

  return(
    <th onClick={(e) => {props.handleClick(props.columnHead, e)}} style={{fontSize: 40, color: 'white', backgroundColor: 'black', width: 20, height: 20}}>\/</th>
  )
}

export default ColumnHeadItem;