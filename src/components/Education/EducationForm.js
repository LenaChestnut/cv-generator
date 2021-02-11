import React from 'react';
import DateInput from '../shared/DateInput';
import FormButtons from './../shared/FormButtons';

class EducationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            degree: props.school.degree || '',
            schoolName: props.school.schoolName || '',
            startDate: props.school.startDate || '',
            endDate: props.school.endDate || ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleFormSubmit(this.state);
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
                    aria-label='schoolName'
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