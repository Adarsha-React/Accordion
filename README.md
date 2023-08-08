# Accordion

## Live Demo

- https://sportsaccordion.netlify.app

### Un-controlled Components

These components will have their own state and will not depend on any other components, so they work independently.

### Controlled Components

These components are controlled by their parent component.
🚩 How it works?
Instead of keeping the state in child component, we can keep the state in parent and control the child based on value updating in the parent state variable (By lifting the state up).

### What is Lifting the state up

Child components are controlled by its parent component state variable instead of keeping the separate state variables in child to control themselves.

### Setup an environmenet with using react-create-app npm command

- Create a empty folder in your desktop and open it with any code editor (vs code)
- Add index.html and use emmet option to get the boiler plate code (html5)
  - Add a "div" container with root id where we want to render the react components
  - Add index.css and App.js into this html file.
- Add index.html - here we keep three lines of code used for tailwind css
- Add App.js
  - this file contain application layout (AppLayout)
  - create the root element using id "root" and finally render it
  - add components under AppLayout component and render them at once.
- Initialized package manager and install all required packages
  - npm init
  - npm install react
  - npm install react-dom
  - npm install --save-dev parcel
- Install Tailwind CSS
  - https://tailwindcss.com/docs/guides/parcel
- Created a proper folder structure
  - src folder/all components related
  - src/utils/constants - kept all mockdata and other related extra
