import * as React from 'react'
import './drop-down.css'
import icon from '../../assets/list.svg'

function DropDown (props ) {
    const [open, setOpen] = React.useState(false);


    const toggleDrawer = (event) => {
        if(event.type === "keydown" && (event.key === 'tab' || event.key === 'shift')){
            return;
        }
        setOpen(true);
    }

    return (
            <button><img  id = "drop-down-icon" src={icon} alt="" /></button>
    )   
}

export default DropDown;
