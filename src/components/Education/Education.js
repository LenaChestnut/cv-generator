import React from 'react';
import School from './School';
import AddButton from './../shared/AddButton';
import { addItem } from '../shared/helpers';

class Education extends React.Component {
    constructor(props) {
        super(props);
        
        this.addItem = addItem.bind(this);
        this.deleteSchool = this.deleteSchool.bind(this);
        this.editSchool = this.editSchool.bind(this);
    }

    deleteSchool(id) {
        const filteredSchools = this.props.education.schools.filter(school => school.id !== id);
        const updatedInfo = {
            schools: [...filteredSchools],
        }
        this.props.saveInfo(updatedInfo, 'education');
    }

    editSchool(info) {
        const newSchools = this.props.education.schools.map(school => {
            if (school.id === info.id) {
                return info;
            }
            return school;
        });
        
        const updatedInfo = {
            schools: [...newSchools]
        };

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
                <AddButton addItem={() => this.addItem('education', 'schools')}/>
            </section>
        )
    }
}

export default Education;