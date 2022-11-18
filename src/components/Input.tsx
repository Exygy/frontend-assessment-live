import React from "react"
import "./Input.scss"

export interface InputProps {
  label: string
}

export const Input = (props: InputProps) => {
  return (
    <div className={"input"}>
      <label htmlFor={props.label}>{props.label}</label>
      <input id={props.label} type={"number"} />
    </div>
  )
}
