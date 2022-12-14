import React from 'react'
import { ACTIONS } from './CalsUi'

const OperationButton = (props) => {

  function clickHandler() {
    const operation = props.operation;
    props.dispatchFn({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
  }

  return (
    <button className={props.className} onClick={clickHandler}>{props.operation}</button>
  )
}

export default OperationButton;