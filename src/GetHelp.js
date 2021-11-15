import { useState } from "react/cjs/react.development";

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
  <button className="help-btn" onClick={()=>{handleHelpBtn()}} >"Help!"</button>
)
}
export default GetHelp
