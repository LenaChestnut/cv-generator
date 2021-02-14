import { v4 as uuidv4 } from 'uuid';

export function toggleForm() {
    this.setState(state => ({
        isFormOpen: !state.isFormOpen,
    }));
}

export function addItem(section, itemsPath) {
    const updatedInfo = {
        [itemsPath]: [
            ...this.props[section][itemsPath],
            {id: uuidv4()}
        ]
    }
    this.props.saveInfo(updatedInfo, section);
}

export function handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
}

export function handleSubmit(e) {
    e.preventDefault();
    this.props.handleFormSubmit(this.state);
}