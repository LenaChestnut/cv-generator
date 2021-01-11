import React from 'react';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import General from './components/General/General';

function App() {
  return (
    <main className="app">
      <General />
      <Education />
      <Experience />
    </main>
  );
}

export default App;
