import "./App.css";
import StudentsList from "./components/StudentsList";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Student Management System</h1>
      </header>
      <EditStudent />
      {/* <StudentsList /> */}
    </div>
  );
}

export default App;
