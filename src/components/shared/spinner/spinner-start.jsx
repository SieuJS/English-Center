import {useState, useEffect} from 'react'
import './spinner-start.css'


const SpinnerStart = (props) => {
    return (<div id = "spinner" className= {"bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 " }  >
        <div className={'spinner-border text-primary' } style = {{width : '3rem', height : '3rem'}} role='status'>
            <span className='sr-only'>Loading</span>
        </div>
        <h3>{"Loading"}</h3>
    </div>)
}

export default SpinnerStart;