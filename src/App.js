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

		this.saveInfo = this.saveInfo.bind(this);
	}

	saveInfo(info, section) {
		this.setState((prevState) => {
			return {
				person: {
					...prevState.person,
					[section]: info,
				}
			}
		});
	}
	
	render() {
		const { general, education, experience } = this.state.person;

		return (
			<main className="app">
				<General general={general} saveInfo={this.saveInfo}/>
				<Education education={education} saveInfo={this.saveInfo}/>
				<Experience experience={experience}/>
			</main>
		);
	}
}

export default App;
