const Block = ({ letter, hidden }) => {
  if (letter == " ") {
    return <div className="block empty"></div>;
  }
  if (hidden) {
    return <div className="block"></div>;
  }
  return <div className="block show">{letter}</div>;
};

export const WordBlocks = ({ word, discoveredLetters }) => {
  if (!word) return <></>;
  return (
    <div className="word-blocks">
      {[...word].map((w, index) => (
        <Block
          key={w + index}
          letter={w}
          hidden={!discoveredLetters.includes(w)}
        />
      ))}
    </div>
  );
};
