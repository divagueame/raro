import './App.css';
import Header from './Header'
import UserInput from './UserInput';
import GuessDisplay from './GuessDisplay';
import GetHelp from './GetHelp';
import { useState } from 'react';

function App() {
  let wordsBank = [{
    id: 1,
    word: 'globo',
    wordIndex: 3,
    sentence: 'El globo es precioso.',
    imgSrc: './img/037-hot air balloon.png',
    seen: false
  },
  {
    id: 2,
    word: 'bicicleta',
    wordIndex: 3,
    sentence: 'Es una bicicleta muy bonita.',
    imgSrc: './img/025-bicycle.png',
    seen: false
  },
  {
    id: 3,
    word: 'limusina',
    wordIndex: 3,
    sentence: 'Una limusina de alto nivel.',
    imgSrc: './img/042-limousine.png',
    seen: false
  },
  {
    id: 4,
    word: 'camion',
    wordIndex: 3,
    sentence: 'Este es un camion muy pesado.',
    imgSrc: './img/048-truck.png',
    seen: false
  },
  {
    id: 5,
    word: 'caravana',
    wordIndex: 3,
    sentence: 'Una caravana muy amplia.',
    imgSrc: './img/050-caravan.png',
    seen: false
  },
  {
    id: 6,
    word: 'coche',
    wordIndex: 3,
    sentence: 'Un coche muy util.',
    imgSrc: './img/002-car.png',
    seen: false
  },]

  const [currentWord, setCurrentWord] = useState();
  const [wordsArray, setWordsArray] = useState(wordsBank);
  const [playing,setPlaying] = useState(false);

  function triggerNext(){
    
    let filteredWords = wordsArray.filter((word)=>{
      if (word!==currentWord){
        return true
      } return false
    })
    // console.log("Filtered", filteredWords)
    if(filteredWords.length>0){
      setWordsArray(filteredWords);
      let randomIndex = Math.floor(Math.random()*wordsArray.length)
      let randomWord = wordsArray[randomIndex]
      setCurrentWord(randomWord);
    }else{
      setPlaying(false);
      console.log("GAME OVER")
    }
  }

  return (
    <div className="App">
      <Header />

      {!playing && <button onClick={()=>{setPlaying(true); triggerNext()}}>Start!</button>}
      {playing && <div>Current target word is: {currentWord.word}. Total words left: {wordsArray.length}</div>}
      {playing && <GetHelp wordSrc={currentWord.imgSrc}/>}
      {playing && <GuessDisplay wordSrc={currentWord.imgSrc}/>}
      {playing &&<UserInput currentWord={currentWord.word} triggerNext={triggerNext}/>}
    </div>
  );
}

export default App;
