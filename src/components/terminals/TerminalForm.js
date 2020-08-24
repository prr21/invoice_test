import React from 'react'

function TerminalForm({ onSubmit, title, description }){
  return (
    <form className="mt-4 text-right" 
      onSubmit={onSubmit}>

      <div className="form-group">
        <input className="form-control" placeholder="Название" type="text" required
          value={title.value()}
          onChange={title.onChange}/>
      </div>
      <div className="form-group">
        <textarea className="form-control" placeholder="Описание" type="text" required
          rows="6"
          value={description.value()}
          onChange={description.onChange}/>
      </div>
      <button type="Добавить" className="btn btn-primary">
        Добавить в список
      </button>
    </form>
  )
}

export default TerminalForm