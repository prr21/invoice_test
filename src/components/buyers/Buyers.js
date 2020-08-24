import React from 'react'
import Buyer from './Buyer'
import { Route } from 'react-router-dom'

function Buyers(){

  return (
    
  <div className="container d-flex justify-content-center mt-4">
    <table className="table table-bordered text-center col-8 mt-4">
      <thead>
        <tr className="table-active">
          <th scope="col">ID покупателя</th>
          <th scope="col">Имя покупателя</th>
          <th scope="col">Средний чек</th>
          <th scope="col">Количество покупок</th>
          <th scope="col">Общая выручка</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((e, i) => 
          <Route render={ () => 
              <Buyer 
                key={e.id}
                buyer={e}
              />
          }/>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default Buyers

let arr = [
  {
    id: 1,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 2,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 3,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 4,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 5,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 6,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 7,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 8,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 9,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 10,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 11,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 12,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 13,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 14,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 15,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
  {
    id: 16,
    name: 'Mark',
    averageCheck: 1000,
    buysCount: 10,
    total: 10000
  },
]