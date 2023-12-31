import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTasksData } from './Components/Hooks/useTasksData';
import { useWeeklyRecord } from './Components/Hooks/useWeeklyRecord';
import Menu from './Components/Menu';
import TaskPage from './Components/TaskPage'
import { AssessmentRecordTables } from './Components/AssessmentRecordTables';
import { WeeklyProgressTracker } from './Components/WeeklyProgressTracker';
import './styles/App.css' ;  
import './styles/desktop-responsive.css';
import './styles/mobile-responsive.css';

function App() {
  const { todayTasks, upComingTasks } = useTasksData();
  const { sortedWeeklyData } = useWeeklyRecord();

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<TaskPage day='Today' dateColDisplay='display-none' taskData={todayTasks} />} />
          <Route path='/upComming' element={<TaskPage day='Up Comming' dateColDisplay='' taskData={upComingTasks} />} />
          <Route path='/tables' element={<AssessmentRecordTables />} />
          <Route path='/weeklyProgress' element={<WeeklyProgressTracker recordData={sortedWeeklyData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;