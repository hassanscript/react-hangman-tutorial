import { useEffect, useState } from "react";

const ITEMS = ["platform", "rope", "face-0", "torso", "arms", "legs"];

export const Hangman = ({ lives }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(ITEMS.slice(0, lives));
    if (lives >= 6) {
      setItems((i) => ["face-1", ...i]);
    }
  }, [lives]);

  return (
    <div className="hangman">
      {items.map((i) => (
        <img key={i} className={i} src={`/hangman-layers/${i}.png`} />
      ))}
    </div>
  );
};
