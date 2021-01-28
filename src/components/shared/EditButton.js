import React from 'react';
import { Edit } from 'react-feather';

class EditButton extends React.Component {
    render() {
        return (
            <div className='button-container'>
                <button type='button' onClick={this.props.handleClick} aria-label='Edit' title='Edit'>
                    <Edit
                        className='button__icon' 
                        style={{marginRight: '-1px'}} 
                        aria-hidden='true' 
                        focusable='false'
                    />
                </button>
            </div>
        )
    }
}

export default EditButton;