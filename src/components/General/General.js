import React from 'react';
import EditButton from './../shared/EditButton';
// import GeneralForm from './GeneralForm';

class General extends React.Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         email: '',
    //         phone: '',
    //         fullName: ''
    //     }

    //     this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({[e.target.name]: e.target.value});
    // }

    render() {
        return (
            <section className="section">
                <div className="section__info">
                    <h1 className="name">John Doe</h1>
                    <h2 className="section__title">Contact info</h2>
                    <div className="info-item info-item-general">
                        <p className="info-item__extra email">
                            <span className="label">Email:</span> lenachestnut@gmail.com
                        </p>
                        <p className="info-item__extra phone">
                            <span className="label">Phone:</span> +7927555555
                        </p>
                    </div>
                </div>
                <EditButton />
                {/* <GeneralForm /> */}
            </section>
        )
    }
}

export default General;