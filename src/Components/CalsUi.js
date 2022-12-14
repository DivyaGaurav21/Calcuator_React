import {Fragment , useReducer} from 'react'
import './CalsUi.css'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'


export const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  CHOOSE_OPERATION : 'choose-operation',
  CLEAR : 'clear',
  DELETE_DIGIT : 'delete-digit',
  EVALUTE : 'evaluate'
}

const reducer = (state,  {type , payload}) => {
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(payload.digit === "0" && state.currOperand === "0") {
        return state;
      };
      if(payload.digit === "." && state.currOperand.includes(".")) {
        return state;
      }
      return {
         ...state ,
         currOperand: `${state.currOperand || ""}${payload.digit}`
      }
     
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currOperand === null && state.prevOperand == null) {
        return state;
      }
      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: state.currOperand,
          currOperand: null,
        }
      }
      if (state.currOperand == null) {
        return {
          ...state, 
          operation:payload.operation
        }
      }
      return {
        ...state, 
        prevOperand: evaluate(state),
        operation: payload.operation,
        currOperand : null
      }
    
    
    
    case ACTIONS.CLEAR:
      return {};
      default:
        return state;
  }
}
//here arguments are destructured form of state
function evaluate({ currOperand, prevOperand, operation }) {
  const prev = parseFloat(prevOperand);
  const current = parseFloat(currOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let finalEvaluate = "";
  switch (operation) {
    case "+":
      finalEvaluate = prev + current;
      break;
    case "-":
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
  return finalEvaluate.toString();
}

const CalsUi = () => {
  const [{ currOperand, prevOperand, operation }, dispatchFn] = useReducer(reducer, {});

  const clearHandler = () => {
    dispatchFn({type:ACTIONS.CLEAR})
  }
  const equalHandler = () => {
    dispatchFn({type : ACTIONS.EVALUTE})
  }

  return (
    <Fragment>
      <div className='output'>
        <div className="prev-operand">{prevOperand} {operation}</div>
        <div className="curr-operand">{currOperand}</div>
      </div>
      <div className='btn-container'>
        <button className="span-two" onClick={clearHandler}>AC</button>
        <button className='span-two'>DEL</button>
         <OperationButton operation= "÷" dispatchFn = {dispatchFn}/>
        <br />
        <DigitButton digit= "1" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "2" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "3" dispatchFn = {dispatchFn}/>
        <OperationButton operation= "×" dispatchFn = {dispatchFn}/>
        <br />
        <DigitButton digit= "4" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "5" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "6" dispatchFn = {dispatchFn}/>
        <OperationButton operation= "+" dispatchFn = {dispatchFn}/>
        <br />
        <DigitButton digit= "7" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "8" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "9" dispatchFn = {dispatchFn}/>
        <OperationButton operation= "–" dispatchFn = {dispatchFn}/>
        <br />
        <DigitButton className='span-two' digit= "." dispatchFn = {dispatchFn}/>
        <DigitButton digit= "0" dispatchFn = {dispatchFn}/>
        <button className='span-two' onClick={equalHandler}>=</button>
      </div>
    </Fragment>
  )
}

export default CalsUi