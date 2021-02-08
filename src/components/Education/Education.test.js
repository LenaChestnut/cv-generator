import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Education from './Education';

const testEmptyInfo = {
    schools: [],
}

const testCustomInfo = {
    schools: [
        {
            id: 1,
            degree: 'Magic',
            schoolName: 'Hogwarts',
            startDate: '2007',
            endDate: '2014'
        },
        {
            id: 2,
            degree: 'Computer Science',
            schoolName: 'Internet',
            startDate: '2019',
            endDate: 'present'
        }
    ],
}

describe.only('Component is rendered correctly', () => {
    test('Default view is rendered', () => {
        render(<Education education={testEmptyInfo}/>);
        expect(screen.getByText(/education/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument();
    });

    test('Rendered with custom info', () => {
        render(<Education education={testCustomInfo}/>);
        testCustomInfo.schools.forEach(infoItem => {
            for (const [key, value] of Object.entries(infoItem)) {
                if (key === 'id') {
                    return false;
                }
                expect(screen.getByText(value)).toBeInTheDocument();
            }
        })
    });
})

test.todo('A form is added after Add is clicked');

test.todo('A form is displayed on Edit click');

test.todo('Info section is rendered with default info');