import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import TaskPage from './Components/TaskPage';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<TaskPage day='Today' />} />
          <Route path='/upComming' element={<TaskPage day='Up Comming' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;