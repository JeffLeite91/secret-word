import { useState, useCallback, useEffect } from "react";
import "./App.css";
import { StartScreen } from "./Components/StartScreen";
import { wordsList } from "./data/words";
import { Game } from "./Components/Game";
import { GameOver } from "./Components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [word] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const pickWordAndCategory = () => {
    //Pick a random category
    const categories = Object.keys(word)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //Pick a radom word
    const words = word[category][Math.floor(Math.random() * word[category].length)];

    console.log(words);
    return{words,category}

  }
  //Start the secret word game:

  const startGame = () => {

    //pick word and pick category
    const {words, category} = pickWordAndCategory();

    //Create an array of letters
    let wordLetters = words.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase()); 
    
    console.log(words, category);
    console.log(wordLetters);

    //Fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);


    setGameStage(stages[1].name);
  };

  //Function to process the letter input:
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  //Function to Retry the game
  const retry = () => {
    setGameStage(stages[0].name);
  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
