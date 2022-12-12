import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));
const Auth = lazy(() => import('./Auth'));
const Registre = lazy(() => import ('./Registre'));


const App: React.FC = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Auth"> Login </Link>
              </li>
              <li>
                <Link to ="/Registre">Créer un compte </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/Auth" element={<Auth/>} />
            <Route path="/Registre" element={<Registre/>} />
          </Routes>
      </Suspense>
    </Router>
);
export default App;