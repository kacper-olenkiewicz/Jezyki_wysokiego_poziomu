import { useMemo, useState } from "react";

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) return false;
    }
    return true;
}

export default function PrimeCalculator() {
    const [maxNumber, setMaxNumber] = useState(1000);
    const [inputValue, setInputValue] = useState("1000");

    const primeCount = useMemo(() => {
        if (maxNumber < 2) return 0;
        let count = 0;
        for (let i = 2; i <= maxNumber; i += 1) {
            if (isPrime(i)) count += 1;
        }
        return count;
    }, [maxNumber]);

    const handleChange = (e) => {
        const raw = e.target.value;
        setInputValue(raw);
        const parsed = parseInt(raw, 10);
        if (!Number.isNaN(parsed)) {
            setMaxNumber(Math.max(parsed, 0));
        }
    };

    return (
        <div className="stack">
            <label className="form-group" htmlFor="primeLimit">
                <span>Policz liczby pierwsze do:</span>
                <input
                    id="primeLimit"
                    type="number"
                    min="0"
                    value={inputValue}
                    onChange={handleChange}
                />
            </label>
            <p className="prime-output">
                Liczb pierwszych: <strong>{primeCount.toLocaleString("pl-PL")}</strong>
            </p>
            <p className="muted">
                Obliczenia wykorzystują <code>useMemo</code>, więc kosztowna funkcja
                uruchamia się tylko, gdy zmienisz limit.
            </p>
        </div>
    );
}