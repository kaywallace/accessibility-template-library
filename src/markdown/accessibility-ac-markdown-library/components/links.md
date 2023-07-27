# Links

## Universal Acceptance Criteria

`The link text clearly explains what it is linking to`

`The link visually indicates that it is a link element`

`The link has a visible focus state.`

`The link can be tabbed to using a keyboard`

`Pressing enter while focused on the link takes the user to the destination`

`When the link is brought into focus the screen reader announces the link text and the destination`

`When the link is brought into focus the screen reader announces if the link has been visited before`

## Additional Acceptance Criteria for Unique Cases

`If the default click behavior is being overridden, the ultimate destination of the link should still match the 'href' attribute's value`

## Additional Acceptance Criteria for Creating Reusable Common Components

`The component requires link text`

`The component requires an 'href'`

`The component does not allow the 'href' attribute to be empty or null`

`The component does not allow '#' to be the value of the 'href' attribute`

`Bonus: The component does not allow link text that only says 'click here'`