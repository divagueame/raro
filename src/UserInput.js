import AutosizeInput from 'react-input-autosize';

import { useState, useEffect } from "react";

const UserInput = ({word, triggerNext}) => {
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

  let adjustedWidth = ()=>{
    let thisLength = userInput.length;
    console.log(thisLength)
    return '2010px'
  }

  return (
    <form onSubmit={submitFunction}> {splitSentence(sentence,word.wordIndex)[0]}
      <AutosizeInput autoFocus className="userAnswerInput"
	name="form-field-name"
	value={userInput}
  onChange={handleUserInput}
/>
      {/* <input type="text" autoFocus value={userInput} onChange={handleUserInput}></input>   */}
      {splitSentence(sentence,word.wordIndex)[1]}
      {/* <div>user input: {userInput}</div> */}
      {/* <div>{isSolved && 'SOLVED!'}</div> */}
    </form>
  );
}
 
export default UserInput;
