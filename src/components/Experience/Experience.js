import React from 'react';
import Workplace from './Workplace';
import AddButton from './../shared/AddButton';

class Experience extends React.Component {
    render() {
        return (
            <section className="section">
                <h2 className="section__title">Experience</h2>
                <div className="section__info">
                    <Workplace />
                    <Workplace />
                    <Workplace />
                </div>
                <AddButton />
            </section>
        )
    }
}

export default Experience;