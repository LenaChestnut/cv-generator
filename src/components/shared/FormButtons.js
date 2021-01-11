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
            <fieldset className="form__buttons button-container">
                <button type="submit"><CheckSquare className="button__icon"/></button>
                {this.state.isList 
                ? <button type="button"><MinusSquare className="button__icon"/></button>
                : null}
                <button type="button"><XSquare className="button__icon"/></button>
            </fieldset>
        );
    }
}

export default FormButtons;