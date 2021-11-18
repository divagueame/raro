import { useState, useEffect } from "react";

const UserInput = ({currentWord, triggerNext}) => {
  const [userInput, setUserInput] = useState("");
  const [isSolved, setIsSolved] = useState(false)
  

  useEffect(()=>{
    if(userInput===currentWord){
      
      setIsSolved(true);
      setTimeout(() => {
          
        setIsSolved(false);
        setUserInput('');
        triggerNext();
      }, 1500);

    }

    return ()=>{
      console.log("USE Effect cleanup")
    }

  },[userInput])

  function handleUserInput (e){
    setUserInput(e.target.value);
  }
  
  function submitFunction(e){e.preventDefault()}

  return (
    <form onSubmit={submitFunction}>
      <input type="text" autoFocus value={userInput} onChange={handleUserInput}></input>  
      {/* <div>user input: {userInput}</div> */}
      {/* <div>{isSolved && 'SOLVED!'}</div> */}
    </form>
  );
}
 
export default UserInput;
