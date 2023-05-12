A CV generator app built using React class components.
The app was later converted to functional components

### App structure

#### App.js
- Holds main state
    - passes formData ass props to CV sections

#### DataForm.js
- Holds state of sections. Sections are split into two types
    - Simple section - general, skills
    - Complex section (array of sections) - education, experience
    - Initial state for complex sections are set as an array of 1 empty item
- Renders complex (form) sections dynamically
    - Education and Experience are rendered according to their respective array contents
    - Adds "Add Section" and "Delete Section" buttons according to if the section is the initial (first) section, for first section, delete button
    is removed
    - addSection is passed to AddButton, which adds new object to a sections array
    - deleteSection is passed to DeleteButton, which removes section object from array by id
- Loads example data
    - Loads an example with data
    - Loads empty data
- Change data on input
    - Each Form section component is passed a handleInputChange function. This function is attached to all input fields. According to if the section is complex or not, property of state object gets changed.

#### CV.js
- Passes props to seperate sections
