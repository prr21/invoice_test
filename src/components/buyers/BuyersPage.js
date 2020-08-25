import React, { useState, useEffect } from 'react'

import ShowBy from './ShowBy'
import BuyersTable from './BuyersTable'
import Pagination from '../pagination/Pagination'
import dataBuyers from '../../data/buyers.json'
window.d = dataBuyers

export default function BuyersPage(){

  const [showingBy, setShowingBy] = useState(5)
  const [curPage, setCurPage] = useState(1)
  const [list, setList] = useState([])
  
  const [sortedList, setSortedList] = useState(dataBuyers)
  const [lastSortType, setLastSortType] = useState()

  useEffect(() => {
    function transTabl(){
      //
      const lastDataItem = showingBy * curPage
      const firstDataItem = lastDataItem - showingBy

      //Создание копии отсортированного массива
      let newList = [...sortedList]

      newList = newList.slice(firstDataItem, lastDataItem)
  
      setList(newList)
    }
    transTabl()

  }, [showingBy, curPage, sortedList])

  function showBy(e){
    let value = Number(e.target.textContent)

    setShowingBy(value)
    setCurPage(1)
  }

  function changePage(e){
    e.preventDefault()
    let value = Number(e.target.textContent)

    setCurPage(value)
  }

  function sortByColType({ target }){
    if (target.nodeName !== 'TH') return
    const colType = target.dataset.type

    if (lastSortType === colType){
      sortedList.reverse()

    } else if (colType === 'name') {
      sortedList.sort((a, b) => a[colType].localeCompare(b[colType]))

    } else {
      sortedList.sort((a, b) => b[colType] - a[colType])
    }

    setLastSortType(colType)
    setSortedList([...sortedList])
  }

  return (
    
    <div className="container d-flex align-items-center flex-column mt-4">

      <ShowBy numActive={showingBy} clickHandler={showBy}/>

      <BuyersTable rowsCount={showingBy} rows={list} clickHandler={sortByColType}/>

      <Pagination curPage={curPage} rowsPerPage={showingBy} totalRows={dataBuyers.length} clickHandler={changePage}/>

    </div>
  )
}