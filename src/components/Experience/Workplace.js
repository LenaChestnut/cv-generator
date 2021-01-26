import React from 'react';
import EditButton from './../shared/EditButton';
// import ExperienceForm from './ExperienceForm';

class Workplace extends React.Component {
    render () {
        const { jobTitle, companyName, startDate, endDate, jobDescription } = this.props.workplace;

        return (
            <div className="info-item">
                <div>
                    <h3 className="info-item__main job">{jobTitle ? jobTitle : 'Job title'}</h3>
                    <p className="info-item__extra company">{companyName ? companyName : 'Company name'}</p>
                    <p className="info-item__extra dates">{startDate ? startDate : 'XXXX'} - {endDate ? endDate : 'XXXX'}</p>
                    <p className="info-item__extra description">{jobDescription ? jobDescription : 'Job description'}</p>
                    <EditButton />
                </div>
                {/* <ExperienceForm /> */}
            </div>
        )
    };
};

export default Workplace;