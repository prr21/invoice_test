import React from 'react'

import BuyerRow from './BuyerRow'

export default function BuyersTable({ rows, clickHandler }){

  return (
    <table className="table table-bordered text-center col-8 mt-4">
      <thead>
        <tr className="table-active" onClick={clickHandler}>
          <th data-type={'id'} className="table-head">ID покупателя</th>
          <th data-type={'name'} className="table-head">Имя покупателя</th>
          <th data-type={'averageCheck'} className="table-head">Средний чек</th>
          <th data-type={'buysCount'} className="table-head">Количество покупок</th>
          <th data-type={'total'} className="table-head">Общая выручка</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((e, i) => 
          <BuyerRow 
            key={e.id}
            buyer={e}
          />
        )}
      </tbody>
    </table>
  )
}