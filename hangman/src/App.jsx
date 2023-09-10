import { useEffect, useState } from "react";
import { Hangman } from "./components/Hangman";
import { InputKeys } from "./components/InputKeys";
import { WordBlocks } from "./components/WordBlocks";
import { ResultBox } from "./components/ResultBox";
import words from "./words.json";

function App() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("");
  const [lives, setLives] = useState(0); // max lives are 6
  const [discoveredLetters, setDiscoveredLetters] = useState([]);
  const [status, setStatus] = useState(0); // 0: OK, 1: win, 2: lost

  const checkClick = (key) => {
    if (status != 0) return;

    // if the game has not ended
    if (word.includes(key)) {
      // create new set of discovered letters
      const newDiscoveredLetters = [...new Set([...discoveredLetters, key])];
      setDiscoveredLetters(newDiscoveredLetters);
      const uniqueLetters = new Set(word);
      uniqueLetters.delete(" "); // remove check for empty spaces
      // if the size of both set match then the game is won
      if (newDiscoveredLetters.length === uniqueLetters.size) setStatus(1);
    } else {
      // if lives == 6 then game is lost
      setLives((l) => l + 1);
      if (lives + 1 == 6) setStatus(2);
    }
  };

  const resetWord = () => {
    const categories = Object.keys(words);
    const categoryIndex = Math.floor(Math.random() * categories.length);
    const category = words[categories[categoryIndex]];
    const wordIndex = Math.floor(Math.random() * category.length);
    const word = category[wordIndex];
    setWord(word.toUpperCase());
    setCategory(categories[categoryIndex]);
  };

  const onReset = () => {
    setDiscoveredLetters([]);
    setStatus(0);
    setLives(0);
    resetWord();
  };

  useEffect(() => {
    // run reset when the game starts initially
    onReset();
  }, []);

  return (
    <div className="main-holder">
      <Hangman lives={lives} />
      <div className="info-keys">
        <h1 className="title">HANGMAN</h1>
        <span className="category-text">The word is a {category}</span>
        <WordBlocks word={word} discoveredLetters={discoveredLetters} />
        {status == 0 ? (
          <InputKeys onClick={checkClick} />
        ) : (
          <ResultBox word={word} status={status} onReset={onReset} />
        )}
      </div>
    </div>
  );
}

export default App;
