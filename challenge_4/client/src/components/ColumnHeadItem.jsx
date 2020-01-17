import React from 'react';

function ColumnHeadItem(props) {

  return(
    <th onClick={() =>{console.log(`You just clicked column ${props.columnHead}`)}} style={{fontSize: 40, color: 'white', backgroundColor: 'black', width: 20, height: 20}}>\/</th>
  )
}

export default ColumnHeadItem;