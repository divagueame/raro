import React from 'react'

export default function NextGameButton({updateCurrentWord, setPlaying}) {
  return (
        <button type="button" onClick={() => {updateCurrentWord(); setPlaying(true)}}>
          New game
        </button>
  )
}
