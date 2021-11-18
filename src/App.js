import './App.css';
import Header from './Header'
import UserInput from './UserInput';
import GuessDisplay from './GuessDisplay';
import GetHelp from './GetHelp';
import NextGameButton from './NextGameButton';
import {useState, useEffect } from 'react';


function App() {
  let wordsBank = [{
    id: 1,
    word: 'globo',
    wordIndex: 3,
    sentence: 'El  es precioso.',
    imgSrc: '/img/037-hot air balloon.png',
    seen: false
  },
  {
    id: 2,
    word: 'bicicleta',
    wordIndex: 7,
    sentence: 'Es una  muy bonita.',
    imgSrc: '/img/025-bicycle.png',
    seen: false
  }
  // ,{
  //   id: 3,
  //   word: 'limusina',
  //   wordIndex: 4,
  //   sentence: 'Una  de alto nivel.',
  //   imgSrc: '/img/042-limousine.png',
  //   seen: false
  // },
  // {
  //   id: 4,
  //   word: 'camion',
  //   wordIndex: 8,
  //   sentence: 'Este es  un  muy pesado.',
  //   imgSrc: '/img/048-truck.png',
  //   seen: false
  // },
  // {
  //   id: 5,
  //   word: 'caravana',
  //   wordIndex: 4,
  //   sentence: 'Una  muy amplia.',
  //   imgSrc: '/img/050-caravan.png',
  //   seen: false
  // },
  // {
  //   id: 6,
  //   word: 'coche',
  //   wordIndex: 3,
  //   sentence: 'Un  muy util.',
  //   imgSrc: '/img/002-car.png',
  //   seen: false
  // }
]

  const [wordsArray, setWordsArray] = useState(wordsBank);
  const [currentWord, setCurrentWord] = useState();
  const [playing,setPlaying] = useState(false);
  const [helped,setHelped] = useState(false);
  

  function updateCurrentWord(){
    if(wordsArray.length>=1){
      let randomIndex = Math.floor(Math.random()*wordsArray.length)
      let randomWord = wordsArray[randomIndex]
      setCurrentWord(randomWord);
      setWordsArray(wordsArray.filter(word=>word!==randomWord));
    } 
  }

  function triggerNext(){
    if(wordsArray.length>0){
        updateCurrentWord()
    }else{
      setPlaying(false);
      setWordsArray(wordsBank);
      updateCurrentWord()
      console.log("GAME OVER")
    }
  }

  return (  
    // <div className="App">
    <>
      {/* <Header /> */}

      {!playing &&  
      <NextGameButton updateCurrentWord={updateCurrentWord} setPlaying={setPlaying}/>
      }
      {/* {playing &&<UserInput currentWord={currentWord.word} triggerNext={triggerNext}/>} */}
      {/* {!playing &&  <NextGameButton setPlaying={setPlaying} updateCurrentWord={updateCurrentWord}/>} */}
      
      {/* {playing && <GetHelp setHelped={setHelped} word={currentWord}/>} */}
      
      {playing && <GuessDisplay word={currentWord} helped={helped} triggerNext={triggerNext}/>}
      


      {/* {playing && <div>Current target word is: {currentWord.word}. Total words left: {wordsArray.length}</div>} */}
    {/* </div> */}
    </>
  );
}

export default App;



{/* <Collapsible>
<h2>Title</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti assumenda a quibusdam tenetur laboriosam nihil accusantium tempore quasi perspiciatis unde.</p>
</Collapsible> */}
