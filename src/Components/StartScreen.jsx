import "./StartScreen.css";
import { IoGameControllerOutline } from "react-icons/io5";

export const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <h1>SECRET WORD</h1>
      <p>
        CLIQUE NO BOTÃO PARA COMEÇAR
        <IoGameControllerOutline className="icon1" />
      </p>

      <button onClick={startGame} className="button">
        COMEÇAR
      </button>
    </div>
  );
};
