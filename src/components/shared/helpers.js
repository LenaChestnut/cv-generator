import { v4 as uuidv4 } from 'uuid';

export function toggleForm() {
    this.setState(state => ({
        isFormOpen: !state.isFormOpen,
    }));
}

export function addItem(section, itemsPath) {
    return {
        [itemsPath]: [
            ...this.props[section][itemsPath],
            {id: uuidv4()}
        ]
    };
}

export function editItem(info, section, itemsPath) {
    const newInfo = this.props[section][itemsPath].map(item => {
        if (item.id === info.id) {
            return info;
        }
        return item;
    });
    
    return { [itemsPath]: [...newInfo] };
}

export function deleteItem(id, section, itemsPath) {
    const filtered = this.props[section][itemsPath].filter(school => school.id !== id);
    return { [itemsPath]: [...filtered] };
}

export function handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
}

export function handleSubmit(e) {
    e.preventDefault();
    this.props.handleFormSubmit(this.state);
}
