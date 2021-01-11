import React from 'react';
import FormButtons from './../shared/FormButtons';

class GeneralForm extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            phone: '',
            fullName: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { email, phone, fullName } = this.state;

        return (
            <form className="form">
                <input
                    type="text"
                    className="form__name-input"
                    name="fullName"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={this.handleChange}
                ></input>
                <h2 className="section__title">Contact info</h2>
                <fieldset>
                    <label className="form__label" htmlFor="email">Email: </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@domain.com"
                        value={email}
                        onChange={this.handleChange}
                    ></input>
                </fieldset>
                <fieldset>
                    <label className="form__label" htmlFor="phone">Phone: </label>
                    <input 
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="555-555-555"
                        value={phone}
                        onChange={this.handleChange}
                    ></input>
                </fieldset>
                <FormButtons isList={false} />
            </form>
        );
    }
}

export default GeneralForm;