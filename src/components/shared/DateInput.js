import React from 'react';

class DateInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { startDate, endDate } = this.props;

        return (
            <fieldset>
                <input
                    className="form__date-input"
                    type="text"
                    name="startDate"
                    placeholder="Start date"
                    value={startDate}
                    onChange={this.handleChange}
                ></input>
                <p> - </p>
                <input
                    className="form__date-input"
                    type="text"
                    name="endDate"
                    placeholder="End date"
                    value={endDate}
                    onChange={this.handleChange}
                ></input>
            </fieldset>
        );
    }
}

export default DateInput;