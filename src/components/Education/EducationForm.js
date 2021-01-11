import React from 'react';
import DateInput from "../shared/DateInput";
import FormButtons from './../shared/FormButtons';

class EducationForm extends React.Component {
    render() {
        const { schoolName, degree, startDate, endDate } = this.props.school;

        return (
            <form className="form">
                <input
                    type="text"
                    className="form__degree-input"
                    name="degree"
                    placeholder="Degree title"
                    value={degree}
                    onChange={this.handleChange}
                ></input>
                <input 
                    type="text"
                    name="school"
                    placeholder="School name"
                    value={schoolName}
                    onChange={this.handleChange}
                ></input>
                <DateInput startDate={startDate} endDate={endDate} />
                <FormButtons isList={true}/>
            </form>
        );
    }
}

export default EducationForm;