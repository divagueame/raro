import {useState } from 'react';
import UserInput from './UserInput';
import GetHelp from './GetHelp';
import SkipWord from './SkipWord';

const GuessDisplay = ({word, triggerNext}) => {

  const [helped,setHelped] = useState(false);


  
  return (
    <div className="guessDisplayContainer">
      <div className="guessDisplay">
      <div className="buttons-wrapper">
        <SkipWord word={word} triggerNext={triggerNext}/>
        <GetHelp setHelped={setHelped} word={word}/>
      </div>
      
      <UserInput word={word} triggerNext={triggerNext} helped={helped}/>
      <img className="guess-display-img" src={process.env.PUBLIC_URL + word.imgSrc} alt="Guess..." />
      
      </div>
    </div>
  );
}
 
export default GuessDisplay