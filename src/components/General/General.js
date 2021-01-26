import React from 'react';
import EditButton from './../shared/EditButton';
import GeneralForm from './GeneralForm';

class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFormOpen: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isFormOpen: !state.isFormOpen,
        }));
    }

    render() {
        const { isFormOpen } = this.state;
        const { fullName, email, phone } = this.props;

        return (
            <section className='section'>
                {isFormOpen
                ? <GeneralForm />
                :                
                <div className='section__info'>
                    <h1 className='name'>{fullName ? fullName : 'Your name'}</h1>
                    <h2 className='section__title'>Contact info</h2>
                    <div className='info-item info-item-general'>
                        <p className='info-item__extra email'>
                            <span className='label'>Email:</span> {email ? email : 'your_email@gmail.com'}
                        </p>
                        <p className='info-item__extra phone'>
                            <span className='label'>Phone:</span> {phone ? phone : 'XXX-XXX-XXX'}
                        </p>
                    </div>
                    <EditButton handleClick={this.handleClick}/>
                </div>
                }
            </section>
        );
    }
}

export default General;