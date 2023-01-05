// import react for support jsx 
import React from 'react'
// import action variable in this file 
import { ACTIONS } from './CalsUi'
// this digit button forms single clickable button 
const DigitButton = (props) => {
    //   function for handling click event of individual button  
    function clickHandler(){
        const digit = props.digit;
        // here we call dispatch function for concate the digit on clasiUI screen
        props.dispatchFn({type : ACTIONS.ADD_DIGIT  , payload : { digit } })
    }

    return (
    //   finally returning the html button for each button 
    <button className={props.className} onClick={clickHandler}>{props.digit}</button>
  )
}

export default DigitButton