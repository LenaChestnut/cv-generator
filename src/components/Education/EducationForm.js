import React from 'react';
import DateInput from '../shared/DateInput';
import FormButtons from './../shared/FormButtons';
import { handleChange, handleSubmit } from '../shared/helpers';

class EducationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.school.id,
            degree: props.school.degree || '',
            schoolName: props.school.schoolName || '',
            startDate: props.school.startDate || '',
            endDate: props.school.endDate || ''
        }

        this.handleChange = handleChange.bind(this);
        this.handleSubmit = handleSubmit.bind(this);
    }

    render() {
        const { schoolName, degree, startDate, endDate } = this.state;

        return (
            <form className='form' name='school-form' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    className='form__degree-input'
                    name='degree'
                    aria-label='degree'
                    placeholder='Degree Title'
                    value={degree}
                    onChange={this.handleChange}
                ></input>
                <input 
                    type='text'
                    name='schoolName'
                    aria-label='school name'
                    placeholder='School Name'
                    value={schoolName}
                    onChange={this.handleChange}
                ></input>
                <DateInput startDate={startDate} endDate={endDate} handleChange={this.handleChange}/>
                <FormButtons isList={true} handleClick={this.props.handleClick}/>
            </form>
        );
    }
}

export default EducationForm;