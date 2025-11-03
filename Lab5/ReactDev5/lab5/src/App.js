import './App.css';
import ScoreDisplay from "./ScoreDisplay";
import TaskList from "./TaskList";
import TimeCounter from "./TimeCounter";
import ToggleDetails from "./ToggleDetails";
import UserList from "./UsersList";


function App() {
  return (
    <div className="App">
      <ToggleDetails />
      <ScoreDisplay score={20}/>
      <TaskList />
      <UserList />
      <TimeCounter />
    </div>
  );
}

export default App;
