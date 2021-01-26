import React from 'react';
import School from './School';
import AddButton from './../shared/AddButton';

class Education extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { schools } = this.props.education;

        return (
            <section  className="section">
                <h2 className="section__title">Education</h2>
                <div className="section__info">
                    {schools.map(school => {
                        return <School school={school} key={school.id}/>;
                    })}
                </div>
                <AddButton />
            </section>
        )
    }
}

export default Education;