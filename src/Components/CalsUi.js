import {Fragment , useReducer} from 'react'
import './CalsUi.css'
import DigitButton from './DigitButton'


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
      return {
         ...state ,
         currOperand: `${state.currOperand || ' '} ${payload.digit}`
      }
      default:
        return state;
  }
}

const Button = () => {
  const [{ currOperand, prevOperand, operation }, dispatchFn] = useReducer(reducer, {});

//  dispatchFn({type:ACTIONS.ADD_DIGIT , payload : {digit : 1}})

  return (
    <Fragment>
      <div className='output'>
        <div className="prev-operand">{prevOperand} {operation}</div>
        <div className="curr-operand">{currOperand}</div>
      </div>
      <div className='btn-container'>
        <button className="span-two">AC</button>
        <button className='span-two'>DEL</button>
         <DigitButton digit= "÷" dispatchFn = {dispatchFn}/>
        <br />
        <DigitButton digit= "1" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "2" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "3" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "*" dispatchFn = {dispatchFn}/>
        <br />
        <DigitButton digit= "4" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "5" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "6" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "+" dispatchFn = {dispatchFn}/>
        <br />
        <DigitButton digit= "7" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "8" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "9" dispatchFn = {dispatchFn}/>
        <DigitButton digit= "-" dispatchFn = {dispatchFn}/>
        <br />
        <DigitButton className='span-two' digit= "." dispatchFn = {dispatchFn}/>
        <DigitButton digit= "0" dispatchFn = {dispatchFn}/>
        <button className='span-two'>=</button>
      </div>
    </Fragment>
  )
}

export default Button