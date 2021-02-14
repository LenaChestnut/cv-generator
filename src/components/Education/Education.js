import React from 'react';
import School from './School';
import AddButton from './../shared/AddButton';
import { addItem, editItem } from '../shared/helpers';

class Education extends React.Component {
    constructor(props) {
        super(props);
        
        this.addSchool = this.addSchool.bind(this);
        this.deleteSchool = this.deleteSchool.bind(this);
        this.editSchool = this.editSchool.bind(this);
    }

    addSchool() {
        const info = addItem.call(this, 'education', 'schools');
        this.props.saveInfo(info, 'education');
    }

    deleteSchool(id) {
        const filteredSchools = this.props.education.schools.filter(school => school.id !== id);
        const updatedInfo = {
            schools: [...filteredSchools],
        }
        this.props.saveInfo(updatedInfo, 'education');
    }
    
    editSchool(info) {
        const updatedInfo = editItem.call(this, info, 'education', 'schools');
        this.props.saveInfo(updatedInfo, 'education');
    }

    render() {
        const { schools } = this.props.education;

        return (
            <section  className="section">
                <h2 className="section__title">Education</h2>
                <div className="section__info">
                    {schools.map(school => {
                        return (
                            <School 
                                school={school} 
                                key={school.id} 
                                deleteSchool={this.deleteSchool} 
                                editSchool={this.editSchool}
                            />
                        );
                    })}
                </div>
                <AddButton addItem={this.addSchool}/>
            </section>
        )
    }
}

export default Education;