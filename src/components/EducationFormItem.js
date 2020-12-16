import React from 'react';
import {  CheckSquare, XSquare, Trash } from 'react-feather';

class EducationFormItem extends React.Component {
    render() {
        const { degree, schoolName, startDate, endDate } = this.props.school;

        return (
            <div className="form__item">
                <input
                    type="text"
                    className="form__degree-input"
                    name="degree"
                    placeholder="Degree title"
                    value={degree}
                    onChange={this.handleChange}
                ></input>
                <input 
                    type="text"
                    name="school"
                    placeholder="School name"
                    value={schoolName}
                    onChange={this.handleChange}
                ></input>
                <fieldset>
                    <input
                        className="form__date-input"
                        type="text"
                        name="startDate"
                        placeholder="Start date"
                        value={startDate}
                        onChange={this.handleChange}
                    ></input>
                    <input
                        className="form__date-input"
                        type="text"
                        name="endDate"
                        placeholder="End date"
                        value={endDate}
                        onChange={this.handleChange}
                    ></input>
                </fieldset>
                <fieldset className="form__buttons">
                    <button type="submit"><CheckSquare className="section__icon"/></button>
                    <button type="button"><Trash className="section__icon"/></button>
                    <button type="button"><XSquare className="section__icon"/></button>
                </fieldset>
            </div>
        );
    }
}

export default EducationFormItem;