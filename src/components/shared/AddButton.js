import React from 'react';
import { PlusSquare } from 'react-feather';

class AddButton extends React.Component {
    render() {
        return (
            <div className="button-container">
                <button type="button"><PlusSquare className="button__icon"/></button>
            </div>
        )
    }
}

export default AddButton;