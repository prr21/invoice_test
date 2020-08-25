import React from 'react'

export default function ShowBy({ numActive, clickHandler }) {
  
  const numbers = [5, 10, 15]

  return (
    <div className="d-flex align-items-center">
      <span className="mr-2">отображать по:</span>

      <div className="btn-group">
        {
          numbers.map(number => {
            const classList = ['btn', 'btn-secondary'];
            
            if (numActive === number) {
              classList.push('active')
            }

            return (
              <button type="button" 
                onClick={clickHandler}
                className={ classList.join(' ') }
                key={number}>
                  {number}
              </button>
            )
          })
        }
      </div>
      
    </div>
  )
}
