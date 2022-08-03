import logo from "./logo.svg"
import "./App.css"
import { Col, InputNumber, Row, Slider } from "antd"
import React, { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState(0.1)
  const [bulb1, setBulb1] = useState(0.2)
  const [bulb2, setBulb2] = useState(0.3)

  const onChange = (newValue) => {
    setInputValue(newValue)
    setBulb1(newValue * 2)
    setBulb2(newValue * 5)
  }
  return (
    <div className='App'>
      <div className='row  justify-content-center align-items-center'>
        <div className='col-md-10 '>
          <div className="d-flex justify-content-center">
          <div
            id='bulb'
            style={{
              opacity: inputValue,
              boxShadow: `0px 0px 15px 5px rgba(255,255,255,${inputValue})`
            }}
            className='bulb mb-5 d-flex mx-auto'
          ><span>5w</span></div>
          <div
            id='bulb'
            style={{ opacity: bulb1, boxShadow: `0px 0px 40px 5px rgba(247,238,238,${inputValue})` }}
            className='bulb mb-5 d-flex mx-auto'
          ><span>10w</span></div>
          <div
            id='bulb'
            style={{ opacity: bulb2, boxShadow: `0px 0px 164px 37px rgba(255,255,255,${inputValue})`
            }}
            className='bulb mb-5 d-flex mx-auto'
          ><span>15w</span></div>
          </div>
          
          
            <div className="row justify-content-center">
              <div className="col-md-3">
              <label for='customRange2' className='form-label'>
            Dimmer Level
          </label>
              <Slider
              min={0.1}
              max={1}
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 0}
              step={0.01}
            />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
