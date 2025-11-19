import { useReducer } from "react";
const initialState = { name: "", email: "" };
function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}
export default function FormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <form className="stack" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="nameInput">Imię</label>
        <input
          id="nameInput"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          placeholder="Wpisz swoje imię"
        />
      </div>

      <div className="form-group">
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          placeholder="nazwa@example.com"
        />
      </div>

      <pre className="form-output" aria-live="polite">
        {JSON.stringify(state, null, 2)}
      </pre>
    </form>
  );
}
