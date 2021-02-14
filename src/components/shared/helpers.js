import { v4 as uuidv4 } from 'uuid';

export function toggleForm() {
    this.setState(state => ({
        isFormOpen: !state.isFormOpen,
    }));
}

export function addItem() {
    const updatedInfo = {
        workplaces: [
            ...this.props.experience.workplaces,
            {id: uuidv4()}
        ]
    }
    this.props.saveInfo(updatedInfo, 'experience');
}

export function deleteWorkplace(id) {
    const filtered = this.props.experience.workplaces.filter(workplace => workplace.id !== id);
    const updatedInfo = {
        workplaces: [...filtered],
    }
    this.props.saveInfo(updatedInfo, 'experience');
}

export function editWorkplace(info) {
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

// form handlers