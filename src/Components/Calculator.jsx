import './Calculator.css'
import React, { useState } from 'react';

function Calculator() {

    const[num, setNum] = useState(0)
    const[oldNum, setOldNum] = useState(0)
    const[operation, setOperation] = useState()
    
    function inputNum(e) {
        let value = e.target.value
        num === 0 ?  setNum(value) : setNum(num + value)
    }

    function cleanInput() {
        setNum(0)
    }

    function percentage() {
        setNum(num/100)
    }

    function changeSign() {
        setNum(-num)
    }

    function operationHandler(e) {
        let operationInput = e.target.value
        setOperation(operationInput)
        setOldNum(num)
        setNum(0)
    }

    function calculate() {
        switch(operation) {
            case '+':
            setNum(parseFloat(oldNum) + parseFloat(num))
            break;
            case '-':
            setNum(parseFloat(oldNum) - parseFloat(num))
            break;
            case '*':
            setNum(parseFloat(oldNum) * parseFloat(num))
            break;
            case '/':
            setNum(parseFloat(oldNum) / parseFloat(num))
            break;            
        }
    }

    return (
        <div className='calculator-container'>
                         
            <p className='operation-result'>{num}</p>
            
            <div className='buttons-container'>
                <button className='button purple-background pink-color' onClick={cleanInput}>AC</button>
                <button className='button purple-background' onClick={changeSign}>+/-</button>
                <button className='button purple-background' onClick={percentage}>%</button>
                <button className='button purple-background' value='/' onClick={operationHandler}>/</button>
            </div>
            
            <div className='buttons-container'>
                <button className='button' value='7' onClick={inputNum}>7</button>
                <button className='button' value='8' onClick={inputNum}>8</button>
                <button className='button' value='9' onClick={inputNum}>9</button>
                <button className='button purple-background' onClick={operationHandler} value='*'>x</button>
            </div>

            <div className='buttons-container'>
                <button className='button' value='4' onClick={inputNum}>4</button>
                <button className='button' value='5' onClick={inputNum}>5</button>
                <button className='button' value='6' onClick={inputNum}>6</button>
                <button className='button purple-background' value='-' onClick={operationHandler}>-</button>
            </div>

            <div className='buttons-container'>
                <button className='button' value='1' onClick={inputNum}>1</button>
                <button className='button' value='2' onClick={inputNum}>2</button>
                <button className='button' value='3' onClick={inputNum}>3</button>
                <button className='button purple-background' value='+' onClick={operationHandler}>+</button>
            </div>

            <div className='buttons-container'>
                <button className='button' value='0' onClick={inputNum}>0</button>                
                <button className='button double-space' value='.' onClick={inputNum}>.</button>
                <button className='button purple-background pink-color'onClick={calculate}>=</button>
            </div>

        </div>
    )
}

export default Calculator;