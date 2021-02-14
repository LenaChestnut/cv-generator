import React from 'react';
import Workplace from './Workplace';
import AddButton from './../shared/AddButton';
import { addItem, editItem, deleteItem } from '../shared/helpers';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.addWorkplace = this.addWorkplace.bind(this);
        this.editWorkplace = this.editWorkplace.bind(this);
        this.deleteWorkplace = this.deleteWorkplace.bind(this);
    }

    addWorkplace() {
        const info = addItem.call(this, 'experience', 'workplaces');
        this.props.saveInfo(info, 'experience');
    }

    deleteWorkplace(id) {
        const updatedInfo = deleteItem.call(this, id, 'experience', 'workplaces');
        this.props.saveInfo(updatedInfo, 'experience');
    }

    editWorkplace(info) {
        const updatedInfo = editItem.call(this, info, 'experience', 'workplaces');
        this.props.saveInfo(updatedInfo, 'experience');
    }

    render() {
        const { workplaces } = this.props.experience;

        return (
            <section className="section">
                <h2 className="section__title">Experience</h2>
                <div className="section__info">
                    {workplaces.map(workplace => {
                        return (
                            <Workplace 
                                workplace={workplace} 
                                key={workplace.id} 
                                editWorkplace={this.editWorkplace} 
                                deleteWorkplace={this.deleteWorkplace}
                            />
                        )
                    })}
                </div>
                <AddButton addItem={this.addWorkplace}/>
            </section>
        )
    }
}

export default Experience;