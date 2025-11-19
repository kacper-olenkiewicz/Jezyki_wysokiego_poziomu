import React, { useRef, useState } from "react";

function ClickCounter() {
    const counter = useRef(0);
    const [visibleCount, setVisibleCount] = useState(0);

    const handleClick = () => {
        counter.current += 1;
        setVisibleCount(counter.current);
    };

    const handleReset = () => {
        counter.current = 0;
        setVisibleCount(0);
    };

    return (
        <div className="stack">
            <p className="muted">Kliknięcia nie resetują się po przeładowaniu.</p>
            <div className="counter-display">
                <span>{visibleCount}</span>
                <span>kliknięć</span>
            </div>
            <div className="button-row">
                <button className="btn btn-primary" onClick={handleClick}>
                    Kliknij mnie
                </button>
                <button className="btn btn-ghost" onClick={handleReset}>
                    Resetuj
                </button>
            </div>
        </div>
    );
}

export default ClickCounter;