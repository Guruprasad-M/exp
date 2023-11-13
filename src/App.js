import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import { Auth } from "./pages/auth/index"
import {ExpenseTracker} from "./pages/expense-tracker/index"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<Auth/>}/>
        <Route path="/a" exact element={<ExpenseTracker/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
