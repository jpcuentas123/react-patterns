import "./App.css";
import CompoundComponent from "./components/CompoundComponents";
import HttpStateMachine from "./components/StateMachine/HttpStateMachine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CompoundComponent />
      </header>
    </div>
  );
}

export default App;
