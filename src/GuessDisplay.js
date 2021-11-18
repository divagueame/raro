import UserInput from './UserInput';

const GuessDisplay = ({word, helped, triggerNext}) => {

  function splitSentence(s,i){
    let arr = [];
    arr[0] = s.substr(0,i);
    arr[1] = s.substr(i);
    return arr
  }

  function hiddenWordUnderscores(word){
    let str = "_"
    
    for(let i=0;i<=word.word.length;i++){
      str += "_"
    }
    return str
  }

  return (
    <div className="guessDisplayContainer">
      <div className="guessDisplay">
      {helped && <p>{splitSentence(word.sentence,word.wordIndex)[0]} {word.word} {splitSentence(word.sentence,word.wordIndex)[1]}</p>} 
      {!helped && <p>{splitSentence(word.sentence,word.wordIndex)[0]} {hiddenWordUnderscores(word)} {splitSentence(word.sentence,word.wordIndex)[1]}</p>} 
      <UserInput currentWord={word.word} triggerNext={triggerNext}/>
      <img className="guess-display-img" src={process.env.PUBLIC_URL + word.imgSrc} alt="Guess..." />
      
      
      </div>
    </div>
  );
}
 
export default GuessDisplay