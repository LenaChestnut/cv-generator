import React from 'react';
import EditButton from './../shared/EditButton';
import GeneralForm from './GeneralForm';
import { toggleForm } from '../shared/helpers';

class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFormOpen: false,
        }

        this.toggleForm = toggleForm.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(info) {
        this.toggleForm();
        this.props.saveInfo(info, 'general');
    }

    render() {
        const { isFormOpen } = this.state;
        const { fullName, email, phone } = this.props.general;
        
        return (
            <section className='section'>
                {isFormOpen
                ? <GeneralForm 
                    handleClick={this.toggleForm} 
                    handleFormSubmit={this.handleFormSubmit} 
                    info={this.props.general}
                />
                :                
                <div className='section__info'>
                    <h1 className='info-item__main name'>{fullName !== '' ? fullName : 'Your Name'}</h1>
                    <h2 className='section__title'>Contact info</h2>
                    <div className='info-item info-item-general'>
                        <p className='info-item__extra email'>
                            <span className='label'>Email:</span> {email !== '' ? email : 'your_email@gmail.com'}
                        </p>
                        <p className='info-item__extra phone'>
                            <span className='label'>Phone:</span> {phone !== '' ? phone : 'XXX-XXX-XXX'}
                        </p>
                    </div>
                    <EditButton handleClick={this.toggleForm}/>
                </div>
                }
            </section>
        );
    }
}

export default General;