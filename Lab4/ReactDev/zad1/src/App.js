import './App.css'; 
import Counter from "./Counter";
import Hello from "./Hello";
import HelloWIthProps from "./HelloWIthProps";
import InputTracker from "./InputTracker";
import LoginForm from "./LoginForm";
import LoginStatus from "./LoginStatus";
import TodoList from "./ToDoList";

function App() {
  return (
    <div className="app-center">
      <div className="app-card">
        <Hello />
        <div className="app-row">
          <HelloWIthProps name="Anna" />
          <HelloWIthProps name="Michal" />
          <HelloWIthProps name="Bartek" />
        </div>
        <Counter />
        <InputTracker />
        <LoginStatus />
        <TodoList todos={["Kacper", "Olenkiewicz"]} />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
