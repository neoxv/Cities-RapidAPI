import React from 'react'
import { IPropsInput } from '../features/common/common.model'

const InputComponent = (props:IPropsInput) => {
  return (
      <input
          type={props.type}
          className="form-control mt-1"
          placeholder={props.placeholder}
          name={props.name}
          onChange={(e)=>props.handler(e)}
          value={props.value}
          min={props.min}
          max={props.max}
      />
  )
}

export default InputComponent