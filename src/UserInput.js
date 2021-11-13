import { useState, useEffect } from "react";

const UserInput = ({currentWord, triggerNext}) => {
  const [userInput, setUserInput] = useState("");
  const [isSolved, setIsSolved] = useState(false)
  

  useEffect(()=>{
    if(userInput===currentWord){
      console.log("USE EFFECT IN")
      triggerNext();
      setIsSolved(true);
      setTimeout(() => {
        setIsSolved(false);
        setUserInput('');
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
      <input type="text" value={userInput} onChange={handleUserInput}></input>  
      <div>user input: {userInput}</div>
      <div>current: {currentWord}</div>
      <div>{isSolved && 'SOLVED!'}</div>
    </form>
    
  );
}
 
export default UserInput;
