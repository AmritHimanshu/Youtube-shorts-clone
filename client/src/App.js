import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectIsMenuOpen } from './features/menuSlice';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import SidebarClose from './Components/SidebarClose';
import VideoSection from './Components/VideoSection';
import './App.css';

function App() {

  const menuOpen = useSelector(selectIsMenuOpen);

  return (

    <Router>

      <div className="app">
        <Header />

        <div className="app__page">
          {(menuOpen) ? (<Sidebar />) : (<SidebarClose />)}

          <Routes>
            <Route exact path='/' element={<VideoSection />} />
          </Routes>

        </div>

      </div>

    </Router>
  );
}

export default App;
