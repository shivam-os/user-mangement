import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentsList from "./components/StudentsList";
import EditStudent from "./components/EditStudent";
import NewStudent from "./components/NewStudent"
import Navbar from "./components/Navbar";
function App() {
  return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<StudentsList />}/>
          <Route path="/newStudent" element={<NewStudent />} />
          <Route path="/editStudent" element={<EditStudent />} />
        </Routes>
      </div>
  );
}

export default App;
