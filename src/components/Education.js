import React from 'react';
import { PlusSquare } from 'react-feather';
import School from './School';
import { v4 as uuidv4 } from 'uuid';

class Education extends React.Component {
    constructor() {
        super();

        this.state = {
            degree: '',
            schoolName: '',
            startDate: '',
            endDate: '',
            schools: [
                {
                    schoolName: 'Hogwarts',
                    degree: 'Magic',
                    startDate: '2012',
                    endDate: '2019',
                    id: uuidv4(),
                },
                {
                    schoolName: 'Hogwarts',
                    degree: 'Magic',
                    startDate: '2012',
                    endDate: '2019',
                    id: uuidv4(),
                },
            ]
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div  className="section education">
                <h2 className="section__title">Education</h2>
                <div className="section__info">
                    {this.state.schools.map(school => {
                        return <School school={school} key={school.id}/>;
                    })}
                </div>
                <div className="section__buttons">
                    <button type="button"><PlusSquare className="section__icon"/></button>
                </div>
            </div>
        )
    }
}

export default Education;