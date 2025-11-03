import './App.css';
import ScoreDisplay from "./ScoreDisplay";
import TaskList from "./TaskList";
import TimeCounter from "./TimeCounter";
import ToggleDetails from "./ToggleDetails";
import UserList from "./UsersList";
import HandleClick from "./HandleClick";
import HandleMouseOver from './HandleMouseOver';
import ShowImage from './ShowImage';
import LoadDataFromJson from './LoadDataFromJson';
import UploadFile from './UploadFile';
import ChangeStyle from './ChangeStyle';

function App() {
  return (
    <div className="App">
      <ToggleDetails />
      <ScoreDisplay score={20}/>
      <TaskList />
      <UserList />
      <TimeCounter />
      <button onClick={HandleClick} onMouseOver={HandleMouseOver}>
        Kliknij mnie
      </button>
      <ShowImage />
      <LoadDataFromJson />
      <UploadFile /> 
      <ChangeStyle />
    </div>
  );
}

export default App;
