import React from 'react'

export default function Pagination({ curPage, rowsPerPage, totalRows, clickHandler}) {

  const pagesCount = Math.ceil(totalRows / rowsPerPage)
  const pages = []

  for (let i = 1; i <= pagesCount; i++){
    const classList = ['page-item']

    if (curPage === i) {
      classList.push('active')
    }

    pages.push(
      <li className={classList.join(' ')} key={i}>
        <a href="/#"
          className="page-link" 
          onClick={clickHandler}>
            {i}
          </a>
      </li>
    )
  }

  if (pages.length === 1) return null

  return (
    <nav>
      <ul className="pagination">
        { pages }
      </ul>
    </nav>
  )
}
