import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
     	<Navbar title="Contact"/>
     	<Sidebar />
    </div>
  );
}

export default App;
