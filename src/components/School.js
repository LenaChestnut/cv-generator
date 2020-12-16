import React from "react";
import { Edit } from 'react-feather';
import EducationForm from './EducationForm';

class School extends React.Component {
    render() {
        const { degree, schoolName, startDate, endDate } = this.props.school;

        return (
            <div>
                {/* <div className="section__school-info">
                    <h3 className="education__degree">{degree}</h3>
                    <p className="education__school">{schoolName}</p>
                    <p className="education__date">{startDate} - {endDate}</p>
                    <div className="section__buttons education__buttons">
                        <button type="button"><Edit className="section__icon"/></button>
                    </div>
                </div> */}
                <EducationForm school={this.props.school} />
            </div>
        )
    }
}

export default School;