# CV Generator

A simple application for inputting CV information and displaying it.

## Requirements

The application should include:

-   A section to add general information like name, email, phone number.
-   A section to add your educational experience (school name, title of study, date of study)
-   A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company).
-   An edit and submit button for each section or for the whole CV.

## Personal goals

Getting comfortable with writing unit tests for React apps using Jest and react-testing library.

Resources:

-   [How To Test Your React Apps With The React Testing Library](https://www.smashingmagazine.com/2020/07/react-apps-testing-library/)
-   [react-testing-library documentation](https://testing-library.com/)
-   [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library/)

## Development Notes

### Accessible Icon Buttons

https://www.sarasoueidan.com/blog/accessible-icon-buttons/
https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html

OR

Add 'aria-label' attribute to the button for accesibility and 'title' for tooltip messages. Buttons like that can be tested with:

```javascript
// Name should correspond to the aria-label of the button
expect(screen.getByRole('button', { name: /name/i })).toBeInTheDocument();
```

'aria-hidden' attribute on SVG - so it's not recognized by assistive technologies
'focusable' attribute on SVG - so you can't focus on icon as opposed to the button as a whole
