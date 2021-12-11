import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);

    setHistory((history) => {
      if (replace) {
        const newHistory = [...history];
        newHistory.splice(-1, 1, newMode);
        return newHistory;
      } else {
        return [...history, newMode];
      }
    });
  };

  return { mode, transition };
}
