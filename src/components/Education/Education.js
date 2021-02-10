import React from 'react';
import School from './School';
import AddButton from './../shared/AddButton';
import { v4 as uuidv4 } from 'uuid';

class Education extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.addSchool = this.addSchool.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    addSchool() {
        const updatedInfo = {
            schools: [
                ...this.props.education.schools,
                {id: uuidv4()}
            ]
        }
        this.props.saveInfo(updatedInfo, 'education');
    }

    render() {
        const { schools } = this.props.education;

        return (
            <section  className="section">
                <h2 className="section__title">Education</h2>
                <div className="section__info">
                    {schools.map(school => {
                        return <School school={school} key={school.id}/>;
                    })}
                </div>
                <AddButton addSchool={this.addSchool}/>
            </section>
        )
    }
}

export default Education;