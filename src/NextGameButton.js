import React from 'react'
import { useState } from "react";
import { IoRocketSharp } from 'react-icons/io5';
export default function NextGameButton({updateCurrentWord, setPlaying, playing}) {

  const [isHidden, setIsHidden] = useState(false);

  const toggleIsHidden = ()=>{
    setIsHidden(!isHidden)
  }

  let btnClassName = 'next-game-btn';

  if (isHidden) {
    btnClassName += ' next-game-btn-hidden';
  }
  return (
    <div className="next-game-btn-wrapper">
    
      <button className={btnClassName} type="button" onClick={(e) => { 
        toggleIsHidden();

        setTimeout(()=>{
          updateCurrentWord();
          setPlaying(true);

        },1100)
        }}>
        <IoRocketSharp />
        <span>New game</span> 
        </button>
    </div>
        
  )
}
