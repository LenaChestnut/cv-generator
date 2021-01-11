import React from 'react';
import { Edit } from 'react-feather';

class EditButton extends React.Component {
    render() {
        return (
            <div className="button-container">
                <button type="button"><Edit className="button__icon" style={{marginRight: '-1px'}}/></button>
            </div>
        )
    }
}

export default EditButton;