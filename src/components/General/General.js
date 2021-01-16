import React from 'react';
import EditButton from './../shared/EditButton';
// import GeneralForm from './GeneralForm';

class General extends React.Component {
    constructor() {
        super();

        this.state = {
            fullName: '',
            email: '',
            phone: ''
        }
    }

    render() {
        const { fullName, email, phone } = this.state;

        return (
            <section className="section">
                <div className="section__info">
                    <h1 className="name">{fullName ? fullName : "Your Name"}</h1>
                    <h2 className="section__title">Contact info</h2>
                    <div className="info-item info-item-general">
                        <p className="info-item__extra email">
                            <span className="label">Email:</span> {email ? email : "YourEmail@gmail.com"}
                        </p>
                        <p className="info-item__extra phone">
                            <span className="label">Phone:</span> {phone ? phone : "5-555-555"}
                        </p>
                    </div>
                    <EditButton />
                </div>
                {/* <GeneralForm /> */}
            </section>
        );
    }
}

export default General;