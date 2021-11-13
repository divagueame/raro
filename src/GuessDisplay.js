const GuessDisplay = (props) => {
  
  return (
    <div>
    <img className="guess-display-img" src={props.wordSrc} alt="" />
      {/* <h2>Camion</h2> */}
    </div>
  );
}
 
export default GuessDisplay