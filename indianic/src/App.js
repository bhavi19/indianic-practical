import react,{useState} from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import { Routes, BrowserRouter, Route,Navigate } from "react-router-dom";
import Layout from './Pages/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const PrivateRoute = ({ element, isAuthenticated }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <ErrorBoundary>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} isAuthenticated={isLoggedIn} />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
