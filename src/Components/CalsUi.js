// importing useReducer Hooks for managing various state 
import { Fragment, useReducer } from 'react'
import './CalsUi.css'
// importing digitbutton 
import DigitButton from './DigitButton'
// importing operation button
import OperationButton from './OperationButton'

// deciding diffrent action based on requirement 
export const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  CHOOSE_OPERATION : 'choose-operation',
  CLEAR : 'clear',
  DELETE_DIGIT : 'delete-digit',
  EVALUTE : 'evaluate'
}
// handling diffrent action by reducer function 
const reducer = (state,  {type , payload}) => {
  switch (type) {
    // concate digit on casiUI screen 
    case ACTIONS.ADD_DIGIT:
      if (state.overwritedigit) {
        return {
          ...state,
          currOperand: payload.digit,
          overwritedigit : false
        }
          }
        //   if current operand contains 0 after 0 
      if(payload.digit === "0" && state.currOperand === "0") {
        return state;
          };
        //   if current operend already contains decimal becouse two decimal is not allowed 
      if(payload.digit === "." && state.currOperand.includes(".")) {
        return state;
          }
        //   we click digit after digit 
      return {
         ...state ,
         currOperand: `${state.currOperand || ""}${payload.digit}`
      }
     
    //   delete single digit action case 
      case ACTIONS.DELETE_DIGIT: 
          if (state.overwritedigit) {
              return {
                  ...state,
                  overwritedigit: false,
                  currOperand: null,
              }
          }
          if (state.currOperand == null) return state
          if (state.currOperand.length === 1) {
              return { ...state, currOperand: null }
          }
      return {
        ...state,
         currOperand: state.currOperand.slice(0, -1)
      }
    // choose operation action case 
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currOperand === null && state.prevOperand == null) {
        return state;
          }
        //   if prev operand is null 
      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: state.currOperand,
          currOperand: null,
        }
          }
        //   if current operand is null 
      if (state.currOperand == null) {
        return {
          ...state, 
          operation:payload.operation
        }
          }
        //   after clicking operation sign curropend becomr null
      return {
        ...state, 
        prevOperand: evaluate(state),
        operation: payload.operation,
        currOperand : null
          }
      
    //   evaluate action case 
      
    case ACTIONS.EVALUTE: 
      if (state.operation == null || state.currOperand == null || state.prevOperand == null) {
        return state;
      }
      return {
        ...state,
        overwritedigit : true,
        prevOperand: null,
          operation: null,
        // evaluate function called by state 
        currOperand : evaluate(state)
      }
    
    //   clear action case 
      
    case ACTIONS.CLEAR:
      return {};
      default:
        // return state;
  }
}
//here arguments are destructured form of state
function evaluate({ currOperand, prevOperand, operation }) {
  const prev = parseFloat(prevOperand);
  const current = parseFloat(currOperand);
  if (isNaN(prev) || isNaN(current)) return "";
    let finalEvaluate = "";
    // diffrent case operation 
    switch (operation) {
    //   diffrent case handled on the basis of operation sign 
    case "+":
      finalEvaluate = prev + current;
      break;
    case "–":
      finalEvaluate = prev - current;
      break;
    case "×":
      finalEvaluate = prev * current;
      break;
    case "÷":
            finalEvaluate = prev / current;
      break;
    default:
      finalEvaluate = "";
    }
    let result = finalEvaluate.toString();
    // here we limit the length of string because result goes outside of disply in decimal string case 
    if (result.length > 10) {
        return result.substring(0, 11);
    }
    // at last final evalute based on operation return as string 
    return result;
}



// The MAin Component of this file is it 
const CalsUi = () => {
    // here we using useReducer hooks for handling various state 
  const [{ currOperand, prevOperand, operation }, dispatchFn] = useReducer(reducer, {});
  
    // clear handler dispatch function 
  const clearHandler = () => {
    dispatchFn({type:ACTIONS.CLEAR})
    }
    // evaluaton of expression handles by dispatch function 
  const equalHandler = () => {
    dispatchFn({type : ACTIONS.EVALUTE})
    }
    // delete single digit handler dispatch function 
  const deleteSingleDigitHandler = () => {
    dispatchFn({type:ACTIONS.DELETE_DIGIT})
  }

  return (
      <Fragment>
          {/* this oputput container is the screen of calculator  */}
      <div className='output'>
        <div className="prev-operand">{prevOperand} {operation}</div>
              <div className="curr-operand">{currOperand}</div>
          </div>
          {/* btn-container puts all the button element and component button  */}
      <div className='btn-container'>
        <button className="span-two" onClick={clearHandler}>AC</button>
        <button className='span-two' onClick={deleteSingleDigitHandler}>DEL</button>
         <OperationButton operation= "÷" dispatchFn = {dispatchFn}/>
              <br />
              {/* diiffrent digit and operation button button component and passing prop attribute  */}
        <DigitButton digit= "1" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "2" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "3" dispatchFn = {dispatchFn}/>
        <OperationButton operation= "×" dispatchFn = {dispatchFn}/>
              <br />
              {/* diiffrent digit and operation button button component and passing prop attribute  */}
        <DigitButton digit= "4" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "5" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "6" dispatchFn = {dispatchFn}/>
              <OperationButton operation="+" dispatchFn={dispatchFn} />
              {/* diiffrent digit and operation button button component and passing prop attribute  */}
        <br />
        <DigitButton digit= "7" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "8" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "9" dispatchFn = {dispatchFn}/>
              <OperationButton operation="–" dispatchFn={dispatchFn} />
              {/* diiffrent digit and operation button button component and passing prop attribute  */}
        <br />
        <DigitButton className='span-two' digit= "." dispatchFn = {dispatchFn}/>
        <DigitButton digit= "0" dispatchFn = {dispatchFn}/>
        <button className='span-two' onClick={equalHandler}>=</button>
      </div>
    </Fragment>
  )
}
// export calsUI component for use this component inside app component 
export default CalsUi