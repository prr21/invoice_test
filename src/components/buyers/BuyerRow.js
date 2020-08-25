import React from 'react'
import { Link } from 'react-router-dom';

import { toCurrency } from '../../utils/convert'

export default function BuyerRow({ buyer }){

  const { id, name, averageCheck, buysCount, total } = buyer;
  
  return (
    <tr>
        <th className="table-light">
          <Link to={'/buyers/'+id}>{id}</Link>
        </th>

      <td className="table-light">{name}</td>
      <td className="table-light">{ toCurrency(averageCheck) }</td>
      <td className="table-light">{buysCount}</td>
      <td className="table-light">{ toCurrency(total) }</td>
    </tr>
  )
}