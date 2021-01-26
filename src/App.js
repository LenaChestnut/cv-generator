import React from 'react';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import General from './components/General/General';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      person: {
        general: {
          fullName: '',
          email: '',
          phone: ''
        },
        education: {
          schools: []
        },
        experience: {
          workplaces: []
        }
      }
    }
  }
  
  render() {
    const { general, education, experience } = this.state.person;

    return (
      <main className="app">
        <General general={general}/>
        <Education education={education}/>
        <Experience experience={experience}/>
      </main>
    );
  }
}

export default App;
