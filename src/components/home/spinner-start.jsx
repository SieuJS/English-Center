import {useState} from 'react'
import './spinner-start.css'


const SpinnerStart = (props) => {
    const [show, setShow] = useState(true);
    setTimeout( ()=> {
        setShow(false)
    },1)
    return (<div id = "spinner" className={(show ? "show " :"") + "bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center " +(props.className || "")}>
        <div className={'spinner-border text-primary' } style = {{width : '3rem', height : '3rem'}} role='status'>
            <span className='sr-only'>Loading</span>
        </div>
    </div>)
}

export default SpinnerStart;