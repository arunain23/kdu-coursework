import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { FormFocus } from './components/FormFocusComponent/FormFocus';
import { Timer } from './components/TimerComponent/Timer';
import { BasicUseRef } from './components/BasicUseRefComponent/BasicUseRef';
import { TopScroll } from './components/TopScrollComponent/TopScroll';

function App() {
  return (
    <BrowserRouter>
      <div className="buttons-container">
        <Link to="/">Timer</Link>
        <Link to="/query1">Basic UseRef</Link>
        <Link to="/query2">Top Scroll</Link>
        <Link to="/query3">Form Focus</Link>
      </div>

      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/query1" element={<BasicUseRef />} />
        <Route path="/query2" element={<TopScroll />} />
        <Route path="/query3" element={<FormFocus />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
