import React, { useState } from 'react'
import TerminalForm from './TerminalForm'
import TerminaItem from './TerminalItem'

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    onChange: event => setValue(event.target.value),
    clear: () => setValue(''),
    value: () => value,
  }
}

function Terminals(){

  const [terminalList, setTerminalList] = useState([])

  const titleInp = useInput('Терминал №1')
  const descrInp =  useInput('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor in libero et quaerat eligendi dignissimos maxime adipisci quo, fugit, nulla saepe perspiciatis nisi voluptate deleniti ex non tempora asperiores?')

  function submbitHandler(event){
    event.preventDefault()

    const titleVal = titleInp.value()
    const descrVal = descrInp.value()

    if( !titleVal.trim() || !descrVal.trim() ) return
    
    const newTerminal = {
      title: titleVal,
      description: descrVal,
      id: Date.now()
    }

    titleInp.clear()
    descrInp.clear()

    setTerminalList([
      ...terminalList, newTerminal
    ])
  }

  function onRemove(id){
    setTerminalList(
      terminalList.filter(terminal => terminal.id !== id)
    )
  }

  return (
    
    <div className="container d-flex flex-column align-items-center mt-4">
      
      <div className="col-5 mt-4">
        <TerminalForm 
          onSubmit={submbitHandler}
          title={titleInp}
          description={descrInp}
        />
      </div>

      <div className="col-8 mt-4">
        <div className="list-group mt-4">

          {terminalList.map((e) => 
            <TerminaItem 
              onRemove={onRemove}
              title={e.title}
              info={e.description}
              key={e.id}
              id={e.id}
            />
          )}

        </div>
      </div>
    </div>
  )
}

export default Terminals