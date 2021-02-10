import React from 'react';
import DateInput from '../shared/DateInput';
import FormButtons from './../shared/FormButtons';

class EducationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            degree: props.school.degree,
            schoolName: props.school.schoolName,
            startDate: props.school.startDate,
            endDate: props.school.endDate
        }
    }

    render() {
        const { schoolName, degree, startDate, endDate } = this.state;

        return (
            <form className='form' name='school-form'>
                <input
                    type='text'
                    className='form__degree-input'
                    name='degree'
                    placeholder='Degree Title'
                    value={degree}
                    onChange={this.handleChange}
                ></input>
                <input 
                    type='text'
                    name='school'
                    placeholder='School Name'
                    value={schoolName}
                    onChange={this.handleChange}
                ></input>
                <DateInput startDate={startDate} endDate={endDate} />
                <FormButtons isList={true} handleClick={this.props.handleClick}/>
            </form>
        );
    }
}

export default EducationForm;