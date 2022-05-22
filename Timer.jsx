import { useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [show, setShow] = useState(true);
  const [id, setId] = useState();

  const start = () => {
    setId(
      setInterval(() => {
        setTimer((s) => {
          return s + 1;
        });
      }, 1000)
    );
    setShow(false);
  };
  const stop = () => {
    clearInterval(id);
    setShow(true);
  };
  const reset = () => {
    clearInterval(id);
    setTimer(0);
    setShow(true);
  };

  return (
    <div>
      <h1> Show : {timer}</h1>
      {show ? (
        <button onClick={start}>Start</button>
      ) : (
        <button onClick={stop}>Stop</button>
      )}

      <button onClick={reset}>Reset</button>
    </div>
  );
};
