import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Login } from './Pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
