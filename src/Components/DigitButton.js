import React from 'react'
import { ACTIONS } from './CalsUi'

const DigitButton = (props) => {
 
    function clickHandler(){
        const digit = props.digit;
        props.dispatchFn({type : ACTIONS.ADD_DIGIT  , payload : {digit} })
    }

  return (
    <button className={props.className} onClick={clickHandler}>{props.digit}</button>
  )
}

export default DigitButton