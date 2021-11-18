import AutosizeInput from 'react-input-autosize';

import { useState, useEffect } from "react";

const UserInput = ({word, triggerNext, helped}) => {
  const [userInput, setUserInput] = useState("");
  const [isSolved, setIsSolved] = useState(false)
  let sentence = word.sentence
  
  function splitSentence(s,i){
    let arr = [];
    arr[0] = s.substr(0,i);
    arr[1] = s.substr(i);
    return arr
  }

  useEffect(()=>{
    if(userInput===word.word){
      
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
    <span>{splitSentence(sentence,word.wordIndex)[0]}</span>
    {helped && <AutosizeInput autoFocus className="userAnswerInput"
	name="form-field-name"
	value={word.word}
  onChange={()=>{
    console.log("sd")
  }}
/>}
    {!helped && <AutosizeInput autoFocus className="userAnswerInput"
	name="form-field-name"
	value={userInput}
  onChange={handleUserInput}
/>}
  
      {/* <input type="text" autoFocus value={userInput} onChange={handleUserInput}></input>   */}
      {splitSentence(sentence,word.wordIndex)[1]}
      {/* <div>user input: {userInput}</div> */}
      {/* <div>{isSolved && 'SOLVED!'}</div> */}
    </form>
  );
}
 
export default UserInput;
