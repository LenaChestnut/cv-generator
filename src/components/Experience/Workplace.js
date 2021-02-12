import React from 'react';
import EditButton from './../shared/EditButton';
import ExperienceForm from './ExperienceForm';

class Workplace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFormOpen: false,
        };

        this.toggleForm = this.toggleForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
            // this.props.deleteSchool(this.props.school.id);
        }
    }

    handleFormSubmit(info) {
        this.toggleForm();
        this.props.editWorkplace(info);
    }

    render () {
        const { jobTitle, companyName, startDate, endDate, jobDescription } = this.props.workplace;

        return (
            <div className='info-item' data-testid='workplace-item'>
                {
                    this.state.isFormOpen
                    ? <ExperienceForm 
                        handleClick={this.handleClick}
                        workplace={this.props.workplace}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    : (
                        <div>
                            <h3 className='info-item__main job'>{jobTitle ? jobTitle : 'Job title'}</h3>
                            <p className='info-item__extra company'>{companyName ? companyName : 'Company name'}</p>
                            <p className='info-item__extra dates'>{startDate ? startDate : 'XXXX'} - {endDate ? endDate : 'XXXX'}</p>
                            <p className='info-item__extra description'>{jobDescription ? jobDescription : 'Job description'}</p>
                            <EditButton handleClick={this.handleClick}/>
                        </div>
                    )
                }
            </div>
        )
    };
};

export default Workplace;