import React from 'react'

function TerminalItem({ title, info, id, onRemove }){

  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex align-items-center justify-content-between my-2">
        <h5>{title}</h5>

        <button className="btn btn-danger btn-sm"
          onClick={() => onRemove(id)}>
            Delete
        </button>

      </div>
      <p className="mb-1">{info}</p>
    </div>
  )
}

export default TerminalItem
