import React from 'react'

const ListComponent = (props:any) => {

  return (
      <div className="main-container">
          <div className="cards">
            {props.children}
          </div>
      </div>
  )
}

export default ListComponent