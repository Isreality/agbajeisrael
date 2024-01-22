// import { lazy, Suspense } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import Home from './Home';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import "./style.css";
import "./index.css";

// const Home = lazy(() => import('./Home'));
// const Portfolio = lazy(() => import('./Portfolio'));

function App() {
const [loading, setLoading] = useState(false)
useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000)
}, [])

  return (
    
      <div className="App">
        {
          loading ? (
            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <HashLoader
                 color={'#FBAD30'}
                 loading={loading}
                 // cssOverride={override}
                 size={100}
                 aria-label="Loading Spinner"
                 data-testid="loader"
             /> 
            </div>) : (
          <Router>
            {/* <Suspense fallback = {<div className='content'>Loading...</div>}> */}
                <Routes>
                    <Route index path="/" Component={Home}></Route>
                    <Route exact path="/Home" Component={Home}></Route>
                    <Route path="/Portfolio" Component={Portfolio}></Route>
                </Routes>
            {/* </Suspense> */}
          </Router>)

        }
        
      </div>
    
  );
}

export default App;
