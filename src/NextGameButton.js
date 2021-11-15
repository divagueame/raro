import React from 'react'
import { CSSTransition } from "react-transition-group";

// const [inProp, setInProp] = useState(false);

export default function NextGameButton({playing, setPlaying, updateCurrentWord}) {
  return (

    
    
    
      <div>
        <CSSTransition in={!playing} timeout={400} appear classNames="btn-transition">
          {/* <div className="btn-transition">MOVING
            {"I'll receive my-node-* classes"}
          </div> */}
        
        <button type="button" onClick={() => {setPlaying(!playing); updateCurrentWord()}}>
          New game: {playing.toString()}
        </button>
        </CSSTransition>
      </div>
      
      


  )
}
