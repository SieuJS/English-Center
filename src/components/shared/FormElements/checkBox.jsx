import {useEffect, useState} from 'react'

import { useForm } from '../../../hooks/form-hook'

function checkBox(props) {
  const [checked, setChecked] = useState();
  const {options, title, defaultValue} = props; 
  const [isValid , setIsValid] = useState(false);
  
  useEffect(()=> {
    setChecked(defaultValue);
  }, [defaultValue])

  const onCheckHandler = (event) =>{
    const checkedVal = event.target.value ;
    let valid = true;
    setChecked(checkedVal);
    setIsValid(true)


    props.onInput(props.id , checkedVal, valid );
    
  }
  return (
   <div className='form-control'>
    <h3>{title}</h3>
    {props.options.map( (opt, index) => (
      <label key = {opt.value}>
        {opt.label} {": "}
        <input 
        type = "checkbox"
        checked = {checked === opt.value}
        value = {opt.value}
        onChange={onCheckHandler}/>
        </label>
    ))}
   </div>
  )
}

export default checkBox