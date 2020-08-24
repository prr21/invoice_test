import React from 'react'

function Buyer( props ){
  const { id, name, averageCheck, buysCount, total } = props.buyer;
console.log(props);
  return (
    <tr>
      <th className="table-light"
        onClick={() => props.history.push(`buyers/${id}/`)}>
          {id}
      </th>
      <td className="table-light">{name}</td>
      <td className="table-light">{averageCheck}</td>
      <td className="table-light">{buysCount}</td>
      <td className="table-light">{total}</td>
  </tr>
  )
}

export default Buyer