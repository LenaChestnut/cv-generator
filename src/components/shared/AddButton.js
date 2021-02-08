import React from 'react';
import { PlusSquare } from 'react-feather';

class AddButton extends React.Component {
    render() {
        return (
            <div className='button-container'>
                <button type='button' aria-label='Add' title='Add'>
                    <PlusSquare
                        className='button__icon'
                        aria-hidden='true'
                        focusable='false'
                    />
                </button>
            </div>
        )
    }
}

export default AddButton;