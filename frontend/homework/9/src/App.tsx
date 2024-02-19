import './App.css';
import React from 'react';
import Profile from './components/Profile/Profile';

const info = {
  "name": "Amey",
  "fullName": "Amey Aditya",
  "qualification": "SSE",
  "skills": [
    {
      "id": 1,
      "skill": "Python"
    },
    {
      "id": 2,
      "skill": "React"
    }
  ],
  "hobbies": [
    {
      "id": 1,
      "hobby": "Cricket"
    }
  ]
};

function App(){
  return (
    <div className="App">
      <Profile info={info} />
    </div>
  );
}

export default App;
