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

        const iconStyles = {
            color: '#ffe45e',
            alignSelf: 'flex-end',
        }

        return (
            <div className="section general">
                {/* <h1 className="general__name">Елена Каштанова</h1>
                <p className="general__email">
                    <span className="section__label">Email:</span> lenachestnut@gmail.com
                </p>
                <p className="general__phone">
                    <span className="section__label">Phone:</span> +7927555555
                </p>
                <div className="section__buttons">
                    <Edit style={iconStyles}/>
                </div> */}
                <form className="form">
                    <fieldset>
                        <input
                            type="text"
                            className="form__name-input"
                            name="fullName"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={this.handleChange}
                        ></input>
                    </fieldset>
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
                        <button type="submit"><CheckSquare style={iconStyles}/></button>
                        <button type="button"><XSquare style={iconStyles}/></button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default General;