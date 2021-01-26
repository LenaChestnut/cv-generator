import React from 'react';
import Workplace from './Workplace';
import AddButton from './../shared/AddButton';

class Experience extends React.Component {
    render() {
        const { workplaces } = this.props.experience;

        return (
            <section className="section">
                <h2 className="section__title">Experience</h2>
                <div className="section__info">
                    {workplaces.map(workplace => {
                        return <Workplace workplace={workplace} key={workplace.id}/>;
                    })}
                </div>
                <AddButton />
            </section>
        )
    }
}

export default Experience;