import React from 'react';
import { CheckSquare, XSquare, MinusSquare } from 'react-feather';

class FormButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isList: this.props.isList,
        }
    }

    render() {
        return (
            <fieldset className='form__buttons button-container' >
                <button type='submit' aria-label='submit' title='Submit' className='submit'>
                    <CheckSquare
                        className='button__icon'
                        aria-hidden='true' 
                        focusable='false'
                    />
                </button>
                {this.state.isList 
                ?
                <button type='button' aria-label='delete' title='Delete' onClick={this.props.handleClick} className='delete'>
                    <MinusSquare 
                        className='button__icon'
                        aria-hidden='true' 
                        focusable='false'
                    />
                </button>
                : null}
                <button type='button' aria-label='cancel' title='Cancel' onClick={this.props.handleClick} className='cancel'>
                    <XSquare
                        className='button__icon'
                        aria-hidden='true' 
                        focusable='false'
                    />
                </button>
            </fieldset>
        );
    }
}

export default FormButtons;