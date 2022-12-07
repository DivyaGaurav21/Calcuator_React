import {Fragment } from 'react'
import './CalsUi.css'




const Button = () => {
  

  return (
    <Fragment>
      <div className='output'>
        <div className="prev-operand">1234 +</div>
        <div className="curr-operand">3421</div>
       
      </div>
      <div className='btn-container'>
        <button className="span-two">AC</button>
        <button className='span-two'>DEL</button>
        <button>÷</button>
        <br />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <br />
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <br />
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <br />
        <button className='span-two'>.</button>
        <button>0</button>
        <button className='span-two'>=</button>
      </div>
    </Fragment>
  )
}

export default Button