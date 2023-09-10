export const ResultBox = ({ word, status, onReset }) => {
  const message =
    status === 2
      ? `Oh no! You are out of lives, the correct word was "${word}"`
      : `Congrats! you successfully guessed the word "${word}"`;

  return (
    <div className={"result-box " + (status == 2 ? "error" : "")}>
      <span>{message}</span>
      <div>
        <button onClick={onReset}>Start New Round</button>
      </div>
    </div>
  );
};
