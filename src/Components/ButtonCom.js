import React from 'react'
import './Button.css'
const ButtonCom = (props) => {
    
    return (
        <div>
            {(props.status === 0) ? <button className="button_start" onClick={props.start}>Start</button> : ""}

            {(props.status === 1) ?
                <div>
                    <button className="button_stop" onClick={props.stop}>Stop</button>
                    <button className="button_Reset" onClick={props.reset}>Reset</button>
                </div> : ""}

            {(props.status === 2) ?
                <div>
                    <button className="button_Resume" onClick={props.resume}>Resume</button>
                    <button className="button_Reset" onClick={props.reset}>Reset</button>
                </div> : ""}

        </div>
    )
}
export default ButtonCom