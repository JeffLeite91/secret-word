import "./GameOver.css";

export const GameOver = ({retry}) => {
  return (
    <div>
    <h1>Game</h1>
    
    <button onClick={retry} className="button">
      Tentar Novamente
    </button>
  </div>
  );
};
