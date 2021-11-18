import { useState } from "react/cjs/react.development";
import { MdHelp } from 'react-icons/md';


const GetHelp = ({setHelped}) => {
  const [helpTime,setHelpTime] = useState(1000);

  function handleHelpBtn(){
    setHelped(true);
    setTimeout(()=>{
      setHelped(false);
      
      let newHelpTime = helpTime * 2
      setHelpTime(newHelpTime)
    },helpTime)
  }

return (
  <div  className="help-btn">
    <MdHelp onClick={()=>{handleHelpBtn()}}/>
  
  </div>
  

)
}
export default GetHelp
