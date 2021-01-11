import React from "react";
import DateInput from "../shared/DateInput";
import FormButtons from './../shared/FormButtons';

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            job: '',
            companyName: '',
            startDate: '',
            endDate: '',
        }
    }

    render() {
        const { job, companyName, startDate, endDate } = this.state;
        
        return (
            <form className="form">
                <input
                    type="text"
                    className="form__job-input"
                    name="job"
                    placeholder="Job title"
                    value={job}
                    onChange={this.handleChange}
                ></input>
                <input 
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={companyName}
                    onChange={this.handleChange}
                ></input>
                <DateInput startDate={startDate} endDate={endDate} />
                <FormButtons isList={true}/>
            </form>
        )
    }
}

export default ExperienceForm;