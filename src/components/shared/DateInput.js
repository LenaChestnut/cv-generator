import React from 'react';

class DateInput extends React.Component {
    render() {
        const { startDate, endDate } = this.props;

        return (
            <fieldset>
                <input
                    className='form__date-input'
                    type='text'
                    name='startDate'
                    aria-label='startDate'
                    placeholder='Start date'
                    value={startDate}
                    onChange={this.props.handleChange}
                ></input>
                <p> - </p>
                <input
                    className='form__date-input'
                    type='text'
                    name='endDate'
                    aria-label='endDate'
                    placeholder='End date'
                    value={endDate}
                    onChange={this.props.handleChange}
                ></input>
            </fieldset>
        );
    }
}

export default DateInput;