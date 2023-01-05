// import react for support jsx
import React from 'react'
// import action variable in this file 
import { ACTIONS } from './CalsUi'

const OperationButton = (props) => {
 //   function for handling click event of individual button  
  function clickHandler() {
      const operation = props.operation;
              // here we call dispatch function for concate choose operation like + - * / 
    props.dispatchFn({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
  }

    return (
          //   finally returning the html button for each button 
    <button className={props.className} onClick={clickHandler}>{props.operation}</button>
  )
}

export default OperationButton;