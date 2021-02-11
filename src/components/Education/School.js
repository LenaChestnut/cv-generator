import React from 'react';
import EditButton from './../shared/EditButton';
import EducationForm from './EducationForm';

class School extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFormOpen: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    toggleForm() {
        this.setState(state => ({
            isFormOpen: !state.isFormOpen,
        }));
    }

    handleClick(e) {
        const buttonName = e.target.className;

        if (buttonName === 'edit' || buttonName === 'cancel') {
            this.toggleForm();
        } else if (buttonName === 'delete') {
            this.props.deleteSchool(this.props.school.id);
        }
    }

    handleFormSubmit() {
        this.toggleForm();
    }

    render() {
        const { degree, schoolName, startDate, endDate } = this.props.school;

        return (
            <div className='info-item' data-testid='school-item'>
                {
                    this.state.isFormOpen
                    ? <EducationForm 
                        school={this.props.school} 
                        handleClick={this.handleClick} 
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    :
                    <div>
                        <h3 className='info-item__main degree'>{degree ? degree : 'Degree Title'}</h3>
                        <p className='info-item__extra school-name'>{schoolName ? schoolName : 'School Name'}</p>
                        <p className='info-item__extra dates'>{startDate ? startDate : 'XXXX'} - {endDate ? endDate : 'XXXX'}</p>
                        <EditButton handleClick={this.handleClick}/>
                    </div>
                }
            </div>
        )
    }
}

export default School;