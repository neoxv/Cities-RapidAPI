import React from 'react'

const FormComponent = (props:any) => {
  return (
      <div className="Auth-form-container" >
          <form className="Auth-form">
              <div className="Auth-form-content">
                  {props.children}
              </div>
          </form>
      </div>
  )
}

export default FormComponent