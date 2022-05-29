import React from 'react'

const SquareComponents = (props) => {
    const classes=props.className?`${props.className} square`:'square'
  return (
    <span className={classes} onClick={props.onClick}>
       {props.Game}
    </span>
  )
}

export default SquareComponents