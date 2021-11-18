import { useState } from "react/cjs/react.development";
import { IoPlaySkipForwardCircle } from 'react-icons/io5';

const SkipWord = ({word, triggerNext}) => {
  

  function handleHelpBtn(){
    
    triggerNext()
    
  }

return (
  <div  className="skip-word-btn">
    <IoPlaySkipForwardCircle onClick={()=>{handleHelpBtn()}}/>
  </div>

)
}
export default SkipWord
