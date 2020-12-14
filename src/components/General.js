import React from 'react';
import { Edit, CheckSquare, XSquare } from 'react-feather';

class General extends React.Component {
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
            <div className="section general">
                <div className="section__info">
                    <h1 className="general__name">Елена Каштанова</h1>
                    <h2 className="section__title">Contact info</h2>
                    <p className="general__email">
                        <span className="section__label">Email:</span> lenachestnut@gmail.com
                    </p>
                    <p className="general__phone">
                        <span className="section__label">Phone:</span> +7927555555
                    </p>
                    <div className="section__buttons">
                        <Edit className="section__icon"/>
                    </div>
                </div>
                {/* <form className="section__form">
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
                    <fieldset className="form__buttons">
                        <button type="submit"><CheckSquare className="section__icon"/></button>
                        <button type="button"><XSquare className="section__icon"/></button>
                    </fieldset>
                </form> */}
            </div>
        )
    }
}

export default General;