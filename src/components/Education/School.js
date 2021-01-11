import React from "react";
import EditButton from './../shared/EditButton';
import EducationForm from './EducationForm';

class School extends React.Component {
    render() {
        const { degree, schoolName, startDate, endDate } = this.props.school;

        return (
            <div className="info-item">
                <div>
                    <h3 className="info-item__main degree">{degree}</h3>
                    <p className="info-item__extra school-name">{schoolName}</p>
                    <p className="info-item__extra dates">{startDate} - {endDate}</p>
                    <EditButton />
                </div>
                <EducationForm school={this.props.school} />
            </div>
        )
    }
}

export default School;