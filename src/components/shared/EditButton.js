import React from 'react';
import { Edit } from 'react-feather';

class EditButton extends React.Component {
    render() {
        return (
            <div className="button-container">
                <button type="button">
                    <Edit className="button__icon" style={{marginRight: '-1px'}} aria-hidden="true" focusable="false"/>
                    <span className="button__accessible-name">Edit</span>
                </button>
            </div>
        )
    }
}

export default EditButton;