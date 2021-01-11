import React from 'react';
import EditButton from './../shared/EditButton';
import ExperienceForm from './ExperienceForm';

class Workplace extends React.Component {
    render () {
        return (
            <div className="info-item">
                <div>
                    <h3 className="info-item__main job">Job title</h3>
                    <p className="info-item__extra company">Company</p>
                    <p className="info-item__extra dates">2017 - 2019</p>
                    <EditButton />
                </div>
                <ExperienceForm />
            </div>
        )
    };
};

export default Workplace;