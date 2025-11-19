import "./App.css";
import ClickCounter from "./ClickCounter";
import PrimeCalculator from "./isPrime";
import LayoutEffectExample from "./LayoutEffectExample";
import FormReducer from "./reducer";
import { useTheme } from "./ThemeContext";

function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();
  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      {dark ? "Włącz jasny motyw" : "Włącz ciemny motyw"}
    </button>
  );
}

function App() {
  const { dark } = useTheme();

  return (
    <div className={`App ${dark ? "App--dark" : "App--light"}`}>
      <header className="App-header">
        <div>
          <p className="eyebrow">Laboratorium 6</p>
          <h1>Interaktywne demonstracje React</h1>
          <p className="muted">
            Licznik referencyjny, kalkulator liczb pierwszych oraz formularz z
            reduktorem stanu.
          </p>
        </div>
        <ThemeSwitcher />
      </header>

      <main className="App-grid">
        <section className="card">
          <h2>Licznik kliknięć</h2>
          <ClickCounter />
        </section>

        <section className="card">
          <h2>Kalkulator liczb pierwszych</h2>
          <PrimeCalculator />
        </section>

        <section className="card">
          <h2>Formularz z reducerem</h2>
          <FormReducer />
        </section>

        <section className="card">
          <h2>Eksperyment z useLayoutEffect</h2>
          <LayoutEffectExample />
        </section>
      </main>
    </div>
  );
}

export default App;
