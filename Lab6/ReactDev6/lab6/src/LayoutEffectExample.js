import { useLayoutEffect, useRef, useState } from "react";

export default function LayoutEffectExample() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!boxRef.current) return;
    const { height } = boxRef.current.getBoundingClientRect();
    setHeight(Math.round(height));
  }, []);

  return (
    <div className="stack">
      <div ref={boxRef} className="measure-box">
        <strong>useLayoutEffect</strong> oblicza mój rozmiar zanim zobaczysz
        wynik.
      </div>
      <p className="muted">
        Zmierzona wysokość: <strong>{height}px</strong>
      </p>
    </div>
  );
}
