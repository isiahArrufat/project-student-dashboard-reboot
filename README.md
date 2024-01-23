# React Student Dashboard Application

## Overview
Welcome to the React Student Dashboard, a dynamic and user-friendly application designed for mentors, instructors, and staff to effortlessly sort and manage up-and-coming developers by their cohort. This application shines in its ability to not only organize students based on their academic groups but also to provide a detailed view into each student's journey. With a simple click, you can access individual student cards showcasing key information like codewars achievements, academic grades, and a unique feature for submitting 1-on-1 comments. Whether you're tracking progress or providing personalized feedback, this dashboard is your go-to tool for managing developer talent efficiently.

## Key Features
- **Student Profiles**: Detailed view of individual student profiles, including academic and personal information.
- **Cohort Management**: Tools to view and manage students based on their respective cohorts.
- **Data Fetching**: Integrated API calls to fetch student data dynamically.
- **Responsive Design**: User-friendly and responsive design for optimal viewing across different devices.
- **Error Handling**: Robust error handling for a smoother user experience.

## Live Application (no installation required)
- Link to our live application: [Student Dashboard App](https://main--aesthetic-kataifi-62cd51.netlify.app/)

## Installation (to run locally)

1. **Clone Repository**: Clone the project repository to your local machine.
2. **Install Dependencies**: In the project directory, use `npm install` to install required dependencies.
3. **Environment Variables**: Set up the necessary environment variables, including the API URL in `.env`.
4. **Start Application**: Run `npm start` to start the application. It will be available at `localhost:3000`.

### Components
- `StudentCard.jsx`: Displays detailed information for a specific student.
- `StudentIndex.jsx`: Manages and displays the list of all students, including data fetching and error handling.
- `StudentList.jsx`: Renders a list view of students with essential information.
- `ClassList.jsx`: Allows filtering students by cohort and provides a cohort-based view.
- `App.jsx`: The main component orchestrating the routing and overall layout.
- Common components (`Header`, `AboutPage`): Used for navigation and displaying general information about the application.

### API Integration
- `fetch.js`: Contains functions for API calls to retrieve student data. Utilizes `URL` from the application's environment variables for API endpoints.

## Usage Instructions

- **Viewing Student List**: The homepage displays a list of students. Click on any student to view more details.
- **Filtering by Cohort**: Use the cohort filter in `ClassList` to view students from specific cohorts.
- **Navigating the Application**: Use the navigation bar to switch between different views and functionalities.

## Technologies

- ReactJS for building the user interface.
- CSS for custom styling.
- React Router for managing navigation and routing.
- Render to deploy our backend server.
- Netlify to deploy our application.

## Developers

1. [Michael Restrepoross](https://github.com/MichaelARestrepoross)
2. [Isiah Arrufat](https://github.com/IsiahArrufat)
3. [Christopher Miranda](https://github.com/ChrisCodeTrials)
