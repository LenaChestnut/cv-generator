import React from 'react';
import Workplace from './Workplace';
import AddButton from './../shared/AddButton';
import { addItem } from '../shared/helpers';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.addItem = addItem.bind(this);
        this.editWorkplace = this.editWorkplace.bind(this);
        this.deleteWorkplace = this.deleteWorkplace.bind(this);
    }

    deleteWorkplace(id) {
        const filtered = this.props.experience.workplaces.filter(workplace => workplace.id !== id);
        const updatedInfo = {
            workplaces: [...filtered],
        }
        this.props.saveInfo(updatedInfo, 'experience');
    }

    editWorkplace(info) {
        const newWorkplaces = this.props.experience.workplaces.map(workplace => {
            if (workplace.id === info.id) {
                return info;
            }
            return workplace;
        });
        
        const updatedInfo = {
            workplaces: [...newWorkplaces]
        };

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
                <AddButton addItem={() => this.addItem('experience', 'workplaces')}/>
            </section>
        )
    }
}

export default Experience;