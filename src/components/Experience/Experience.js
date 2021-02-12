import React from 'react';
import Workplace from './Workplace';
import AddButton from './../shared/AddButton';
import { v4 as uuidv4 } from 'uuid';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.addWorkplace = this.addWorkplace.bind(this);
    }

    addWorkplace() {
        const updatedInfo = {
            workplaces: [
                ...this.props.experience.workplaces,
                {id: uuidv4()}
            ]
        }
        this.props.saveInfo(updatedInfo, 'experience');
    }

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
                <AddButton addItem={this.addWorkplace}/>
            </section>
        )
    }
}

export default Experience;