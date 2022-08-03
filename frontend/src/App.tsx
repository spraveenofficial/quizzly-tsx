import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Login, Signup, Home, Loading, LeaderBoard, Quiz } from './Pages';
import { loadUser } from "./Redux/Actions";
import { useTypedDispatch } from "./Redux/Store";
import {
  ProtectedRoute,
  PublicRoute
} from "./Helpers/routes"
function App() {
  const dispatch = useTypedDispatch();
  const token = localStorage.getItem("token") ? true : false;
  const { isAuthenticated, loading } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (token && !isAuthenticated) {
      dispatch(loadUser());
    }
  }, []);
  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="quiz/:id" element={<Quiz />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
