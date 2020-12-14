import React from 'react';
import Education from './components/Education';
// import Experience from './components/Experience';
import General from './components/General';

function App() {
  return (
    <div className="app">
      <General />
      <Education />
      {/* <Experience /> */}
    </div>
  );
}

export default App;
