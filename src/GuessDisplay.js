const GuessDisplay = ({wordSrc}) => {
  
  return (
    // <div className="guess-display-img"
      // style = {
      //   { backgroundImage: `url(${wordSrc})`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center top',
      //   backgroundSize: '100% auto',
        // height: '100%',
        // width:'auto'
        // }
        // }
        // >
    /* </div> */      
    <img className="guess-display-img" src={wordSrc} alt="" />

  );
}
 
export default GuessDisplay