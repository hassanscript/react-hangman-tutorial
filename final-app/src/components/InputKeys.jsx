const KEYS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

export const InputKeys = ({ onClick }) => {
  return (
    <div className="input-keys">
      {KEYS.map((row, index) => {
        return (
          <div key={"row" + index} className="row">
            {[...row].map((key) => (
              <button
                key={index + key}
                onClick={() => onClick(key)}
                className="key"
              >
                {key}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
};
