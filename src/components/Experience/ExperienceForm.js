import React from 'react';
import DateInput from '../shared/DateInput';
import FormButtons from './../shared/FormButtons';

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.workplace.id || '',
            jobTitle: this.props.workplace.jobTitle || '',
            companyName: this.props.workplace.companyName || '',
            startDate: this.props.workplace.startDate || '',
            endDate: this.props.workplace.endDate || '',
            jobDescription: this.props.workplace.jobDescription || ''
        }
    }

    render() {
        const { jobTitle, companyName, startDate, endDate, jobDescription } = this.state;
        
        return (
            <form className='form' name='experience-form'>
                <input
                    type='text'
                    className='form__job-input'
                    name='job'
                    aria-label='job title'
                    placeholder='Job title'
                    value={jobTitle}
                    onChange={this.handleChange}
                ></input>
                <input 
                    type='text'
                    name='company'
                    aria-label='company name'
                    placeholder='Company name'
                    value={companyName}
                    onChange={this.handleChange}
                ></input>
                <DateInput startDate={startDate} endDate={endDate} />
                <textarea
                    name='jobDescription'
                    aria-label='job description'
                    placeholder='Job description'
                    value={jobDescription}
                    onChange={this.handleChange}
                ></textarea>
                <FormButtons isList={true} handleClick={this.props.handleClick}/>
            </form>
        )
    }
}

export default ExperienceForm;